export default async (req) => {
  return new Response(JSON.stringify({ ok: true, path: new URL(req.url).pathname }), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
};
