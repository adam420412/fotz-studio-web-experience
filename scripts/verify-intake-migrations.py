"""Test intake migrations in disposable PostgreSQL; no production access."""
import json
import shutil
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MIGRATIONS = ROOT / 'supabase/migrations'
work = Path(tempfile.mkdtemp(prefix='fotz-audit-pg-'))
data = work / 'data'
started = False
checks = []

def run(args):
    p = subprocess.run(args, capture_output=True, text=True)
    if p.returncode:
        raise RuntimeError(p.stderr or p.stdout)
    return p.stdout.strip()

def sql(query):
    return run(['psql','-h',str(work),'-p','55443','-d','postgres','-v','ON_ERROR_STOP=1','-At','-c',query])

def migrate(name):
    return run(['psql','-h',str(work),'-p','55443','-d','postgres','-v','ON_ERROR_STOP=1','-f',str(MIGRATIONS/name)])

def book(submission):
    return sql(f"SELECT public.create_website_booking('{submission}','Audit','audit@example.invalid',NULL,'2026-09-18','10:00','test',NULL,'test',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'{{}}'::jsonb)")

try:
    run(['initdb','-D',str(data),'--no-locale','-E','UTF8','--auth-local=trust','--auth-host=reject','--wal-segsize=1'])
    run(['pg_ctl','-D',str(data),'-l',str(work/'postgres.log'),'-w','start','-o',f"-c listen_addresses='' -c unix_socket_directories='{work}' -p 55443"])
    started = True
    sql("""CREATE ROLE anon; CREATE ROLE authenticated; CREATE ROLE service_role BYPASSRLS;
      CREATE TABLE public.bookings(id uuid PRIMARY KEY DEFAULT gen_random_uuid(),client_name text,
        client_email text,client_phone text,booking_date date,booking_time time,service_type text,
        notes text,source text,status text);
      ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
      CREATE POLICY "Anyone can create bookings" ON public.bookings FOR INSERT WITH CHECK(true);""")
    migrate('20260907121000_connect_hub_outbox.sql')
    migrate('20260916070000_contact_notifications.sql')
    assert sql("SELECT count(*) FROM pg_policies WHERE tablename='bookings'") == '1'
    checks.append('foundation preserves existing booking policy')
    assert sql("SELECT bool_and(relrowsecurity) FROM pg_class WHERE relname IN ('crm_delivery_outbox','public_intake_rate_limits')") == 't'
    checks.append('new intake tables have RLS')
    sql("INSERT INTO crm_delivery_outbox(submission_id,payload) VALUES('audit-only','{}'); GRANT SELECT ON crm_delivery_outbox TO anon")
    assert sql('SET ROLE anon; SELECT count(*) FROM crm_delivery_outbox').splitlines()[-1] == '0'
    checks.append('anonymous reader cannot read queued submissions')
    for role,expected in [('anon','f'),('authenticated','f'),('service_role','t')]:
        assert sql(f"SELECT has_function_privilege('{role}','public.consume_public_intake_limit(text,text,integer,integer)','EXECUTE')") == expected
    checks.append('limiter only executable by service role')
    assert [sql("SELECT consume_public_intake_limit(repeat('a',64),'audit',2,60)") for _ in range(3)] == ['t','t','f']
    sql("UPDATE public_intake_rate_limits SET window_started_at=now()-interval '2 minutes'")
    assert sql("SELECT consume_public_intake_limit(repeat('a',64),'audit',2,60)") == 't'
    checks.append('rate limit blocks excess requests and resets')
    assert sql("SELECT notification_status||':'||notification_attempts FROM crm_delivery_outbox WHERE submission_id='audit-only'") == 'not_required:0'
    checks.append('notification defaults initialize existing queue record')
    migrate('20260907121500_website_booking_cutover.sql')
    assert sql("SELECT count(*) FROM pg_policies WHERE tablename='bookings'") == '0'
    assert sql("SELECT has_function_privilege('anon','public.create_website_booking(text,text,text,text,date,time,text,text,text,text,text,text,text,text,text,text,jsonb)','EXECUTE')") == 'f'
    checks.append('booking cutover removes anonymous writes')
    first = book('audit-booking-1')
    assert first == book('audit-booking-1')
    assert sql('SELECT count(*) FROM bookings') == '1'
    checks.append('booking retry returns one record')
    try:
        book('audit-booking-2')
        raise AssertionError('occupied slot accepted a second booking')
    except RuntimeError as error:
        assert 'SLOT_TAKEN' in str(error)
    checks.append('occupied slot rejects a new booking')
    result = {'passed':len(checks),'checks':checks,'production_database_touched':False}
    print(json.dumps(result,indent=2))
finally:
    if started:
        stopped = subprocess.run(['pg_ctl','-D',str(data),'-m','fast','-w','stop'],capture_output=True)
        if stopped.returncode:
            raise RuntimeError(f'Temporary PostgreSQL did not stop; retained {work}')
    shutil.rmtree(work)
