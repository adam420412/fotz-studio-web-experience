/** Wait for a lazy route or CMS body before resolving its fragment. */
export function scrollToLocation(hash, browser = window) {
  let id;
  try { id = decodeURIComponent((hash || '').slice(1)); } catch { id = ''; }
  browser.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  if (!id) return () => {};

  let observer;
  let timeout;
  const cleanup = () => {
    observer?.disconnect();
    if (timeout !== undefined) browser.clearTimeout(timeout);
  };
  const scroll = () => {
    const target = browser.document.getElementById(id);
    if (!target) return false;
    target.scrollIntoView({ block: 'start', behavior: 'instant' });
    return true;
  };
  if (scroll()) return cleanup;

  observer = new browser.MutationObserver(() => {
    if (scroll()) cleanup();
  });
  observer.observe(browser.document.body, { childList: true, subtree: true });
  // A missing anchor must not leave an observer watching widgets indefinitely.
  timeout = browser.setTimeout(cleanup, 10000);
  return cleanup;
}
