// One identity per unchanged attempt. Storage contains a hash, never contact data.
const memory = new Map<string, string>();

const canonical = (value: unknown): string => {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.entries(value).filter(([, v]) => v !== undefined)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${JSON.stringify(k)}:${canonical(v)}`).join(",")}}`;
  }
  return JSON.stringify(value) ?? "null";
};

export async function submissionIdentity(payload: Record<string, unknown>, path: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(canonical({ path, payload })));
  const key = `fotz_submission:v2:${Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, "0")).join("")}`;
  let id = memory.get(key);
  try { id ||= sessionStorage.getItem(key) || undefined; } catch { /* private browsing */ }
  id ||= crypto.randomUUID();
  memory.set(key, id);
  try { sessionStorage.setItem(key, id); } catch { /* memory retains retry identity */ }
  return { id, clear: () => {
    memory.delete(key);
    try { sessionStorage.removeItem(key); } catch { /* optional persistence */ }
  } };
}
