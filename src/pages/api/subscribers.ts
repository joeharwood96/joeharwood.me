import { type NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge'
};

const AUDIENCE_ID = process.env.MAIL_CHIMP_AUDIENCE_ID;
const API_KEY = process.env.MAIL_CHIMP_KEY;
const DATACENTER = process.env.MAIL_CHIMP_SERVER;

export default async function handler(req: NextRequest) {
  const result = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {
    method: 'GET',
    headers: {
      Authorization: `apikey ${API_KEY}`
    }
  });

  const data = await result.json();

  if (!result.ok) {
    return new Response(
      JSON.stringify({ error: 'Error retrieving subscribers' }),
      {
        status: 500,
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  return new Response(JSON.stringify({ count: data?.members.length }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600'
    }
  });
}