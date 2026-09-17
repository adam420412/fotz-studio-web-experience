import { beforeEach, expect, it, vi } from 'vitest';
import { setMarketingConsent } from '@/lib/consent';
import { trackGrowthEvent } from '@/lib/growthTracking';
const fbq=vi.fn();
beforeEach(()=>{vi.clearAllMocks();localStorage.clear();window.fbq=fbq;window.dataLayer=[];setMarketingConsent('rejected');});
it('does not send advertising events without consent',()=>{trackGrowthEvent('generate_lead',{submission_id:'test-id'});expect(fbq).not.toHaveBeenCalled();expect(window.dataLayer).toEqual([]);});
it('uses the capture identity for Meta browser/server deduplication',()=>{setMarketingConsent('accepted');trackGrowthEvent('generate_lead',{submission_id:'test-id',form_name:'www_999'});expect(fbq).toHaveBeenCalledWith('track','Lead',expect.any(Object),{eventID:'test-id'});});
it('distinguishes FormView and FormStart from Lead',()=>{setMarketingConsent('accepted');trackGrowthEvent('form_view',{form_name:'www_999'});trackGrowthEvent('form_start',{form_name:'www_999'});expect(fbq.mock.calls.map(c=>c.slice(0,2))).toEqual([['trackCustom','FormView'],['trackCustom','FormStart']]);});
