import { beforeEach, describe, expect, it, vi } from 'vitest';
import { webcrypto } from 'node:crypto';
const mocks = vi.hoisted(() => ({ invoke: vi.fn(), track: vi.fn() }));
vi.mock('@/integrations/supabase/client', () => ({supabase:{functions:{invoke:mocks.invoke}}}));
vi.mock('@/lib/growthTracking', () => ({trackGrowthEvent:mocks.track,conversionEventForForm:()=> 'generate_lead'}));
vi.mock('@/lib/utm', () => ({getAttributionContext:()=>({first_touch:{},last_touch:{},current_page:'https://www.fotz-studio.pl/strona-dla-firmy'})}));
import { submitContactForm } from '@/lib/web3forms';
import { setMarketingConsent } from '@/lib/consent';
const payload = { form_id:'www_999',name:'Test', email:'test@example.invalid', message:'Firma testowa'};
beforeEach(()=>{vi.stubGlobal('crypto',webcrypto);sessionStorage.clear();localStorage.clear();vi.clearAllMocks();setMarketingConsent('rejected');});
describe('form capture contract',()=>{
  it('does not report a conversion after a rejected capture; retry uses same identity',async()=>{
    mocks.invoke.mockResolvedValueOnce({data:{success:false}}).mockResolvedValueOnce({data:{success:true}});
    await expect(submitContactForm(payload)).rejects.toThrow();expect(mocks.track).not.toHaveBeenCalled();
    await submitContactForm(payload);
    expect(mocks.invoke.mock.calls[0][1].body.submission_id).toBe(mocks.invoke.mock.calls[1][1].body.submission_id);
    expect(mocks.track).toHaveBeenCalledTimes(1);
  });
  it('creates a new identity when the visitor corrects the data after an error',async()=>{
    mocks.invoke.mockResolvedValue({data:{success:false}});
    await expect(submitContactForm(payload)).rejects.toThrow();
    await expect(submitContactForm({...payload,message:'Poprawiona firma'})).rejects.toThrow();
    expect(mocks.invoke.mock.calls[0][1].body.submission_id).not.toBe(mocks.invoke.mock.calls[1][1].body.submission_id);
    expect(Object.keys(sessionStorage).join('')).not.toContain('test@example.invalid');
  });
  it('cookie acceptance is not an opt-in for marketing contact',async()=>{
    setMarketingConsent('accepted');mocks.invoke.mockResolvedValue({data:{success:true}});
    await submitContactForm(payload);
    expect(mocks.invoke.mock.calls[0][1].body.consent).toMatchObject({analytics:true,marketing:false});
    expect(mocks.track.mock.calls[0][1].form_name).toBe('www_999');
    expect(JSON.stringify(mocks.track.mock.calls)).not.toContain(payload.email);
  });
});

it('preserves a separate explicit newsletter opt-in without cookie acceptance',async()=>{
  mocks.invoke.mockResolvedValue({data:{success:true}});
  await submitContactForm({...payload,form_id:'newsletter_checklista',marketing_opt_in:true});
  expect(mocks.invoke.mock.calls[0][1].body.consent).toMatchObject({analytics:false,marketing:true});
});
