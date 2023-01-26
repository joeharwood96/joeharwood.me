async function getAccessToken() {
    const response = await fetch("https://umami-production-01f9.up.railway.app/api/auth/login", {
      method: "POST",
      body: new URLSearchParams({
        username: process.env.UMAMI_USERNAME as string,
        password: process.env.UMAMI_PASSWORD as string,
      }),
    });
  
    return response.json();
  }
  
  export async function getAnalytics() {
    const resp = await getAccessToken();
  
    return fetch(
      `https://umami-production-01f9.up.railway.app/api/websites/7bf4e10b-5a3a-4ba9-90d3-07e867927c7b/stats?start_at=1666463400000&end_at=${Date.now()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${resp.token}`,
        },
      }
    );
  }