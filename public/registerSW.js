// Service worker disabled. Unregister any stale workers.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function (regs) {
    for (var i = 0; i < regs.length; i++) regs[i].unregister();
  });
}
