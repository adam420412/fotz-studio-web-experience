import { afterEach, describe, expect, it, vi } from 'vitest';
import { sendMetaConversion } from '../supabase/functions/_shared/meta-capi';

afterEach(() => { vi.unstubAllGlobals(); vi.restoreAllMocks(); });

const configure = (receipt: Record<string, unknown>) => {
  const env: Record<string, string> = {
    META_DATASET_ID: '123456', META_CAPI_ACCESS_TOKEN: 'test-secret-never-log',
    META_GRAPH_API_VERSION: 'v26.0', META_TEST_EVENT_CODE: 'TEST123',
  };
  vi.stubGlobal('Deno', { env: { get: (key: string) => env[key] } });
  const fetcher = vi.fn().mockResolvedValue(new Response(JSON.stringify(receipt), { status: 200 }));
  vi.stubGlobal('fetch', fetcher);
  return fetcher;
};

const input = { consentGranted: true, eventName: 'Lead' as const, eventId: 'receipt-test', email: 'private@example.com' };

describe('Meta conversion receipt', () => {
  it('does not count HTTP 200 without an accepted event as a sent conversion', async () => {
    configure({ events_received: 0 });
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(await sendMetaConversion(new Request('https://example.com'), input)).toEqual({
      configured: true, sent: false, error: 'META_EVENT_NOT_ACCEPTED',
    });
  });

  it('confirms an accepted test event without logging credentials or contact data', async () => {
    configure({ events_received: 1, fbtrace_id: 'trace-test' });
    const log = vi.spyOn(console, 'info').mockImplementation(() => {});
    expect((await sendMetaConversion(new Request('https://example.com'), input)).sent).toBe(true);
    expect(log.mock.calls[0][1]).toMatchObject({ event_id: 'receipt-test', test_mode: true, events_received: 1 });
    expect(JSON.stringify(log.mock.calls)).not.toContain('test-secret-never-log');
    expect(JSON.stringify(log.mock.calls)).not.toContain('private@example.com');
  });

  it('does not send any request without measurement consent', async () => {
    const fetcher = configure({ events_received: 1 });
    expect((await sendMetaConversion(new Request('https://example.com'), { ...input, consentGranted: false })).sent).toBe(false);
    expect(fetcher).not.toHaveBeenCalled();
  });
});
