create or replace function public.sync_crm_retry_key(p_key text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
begin
  if p_key is null or length(p_key) < 20 then
    return false;
  end if;

  select id into v_id from vault.secrets where name = 'crm_retry_service_role_key';
  if v_id is null then
    perform vault.create_secret(p_key, 'crm_retry_service_role_key', 'Service role key for crm-retry cron job');
  else
    perform vault.update_secret(v_id, p_key, 'crm_retry_service_role_key', 'Service role key for crm-retry cron job');
  end if;
  return true;
end;
$$;

revoke all on function public.sync_crm_retry_key(text) from public;
revoke all on function public.sync_crm_retry_key(text) from anon;
revoke all on function public.sync_crm_retry_key(text) from authenticated;
grant execute on function public.sync_crm_retry_key(text) to service_role;