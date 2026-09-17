Deno.serve(() => new Response(JSON.stringify({
  success: false,
  error: "ENDPOINT_RETIRED",
  message: "Formularze cennika korzystają z zabezpieczonej funkcji send-contact.",
}), {
  status: 410,
  headers: { "Content-Type": "application/json" },
}));
