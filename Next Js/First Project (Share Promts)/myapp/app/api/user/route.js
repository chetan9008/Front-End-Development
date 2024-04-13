export async function GET(request) {
  const users = [
    { id: 1, name: "chetan" },
    { id: 2, name: "gaurav" },
    { id: 3, name: "kumar" },
  ];

  return new Response(JSON.stringify(users));
}
