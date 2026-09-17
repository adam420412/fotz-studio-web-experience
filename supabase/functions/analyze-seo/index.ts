Deno.serve(() => new Response(JSON.stringify({
  success: false,
  error: "ENDPOINT_RETIRED",
  message: "Publiczny analizator SEO został wyłączony do czasu wdrożenia bezpiecznej listy adresów.",
}), {
  status: 410,
  headers: { "Content-Type": "application/json" },
}));
