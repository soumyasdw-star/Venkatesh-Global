export default async (req) => {
  const { code } = await req.json();

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: Netlify.env.get("OAUTH_CLIENT_ID"),
      client_secret: Netlify.env.get("OAUTH_CLIENT_SECRET"),
      code,
    }),
  });

  const data = await response.json();

  return Response.json({
    token: data.access_token,
    provider: "github",
  });
};

export const config = { path: "/oauth" };
