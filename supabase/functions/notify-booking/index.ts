Deno.serve(() => new Response(JSON.stringify({
  success: false,
  error: "ENDPOINT_DISABLED",
  message: "Powiadomienie jest wysyłane przez book-consultation.",
}), {
  status: 410,
  headers: { "Content-Type": "application/json" },
}));
