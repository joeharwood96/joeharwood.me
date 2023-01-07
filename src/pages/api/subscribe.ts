import { type NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge'
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');
  const AUDIENCE_ID = process.env.MAIL_CHIMP_AUDIENCE_ID;
  const API_KEY = process.env.MAIL_CHIMP_KEY;
  const DATACENTER = process.env.MAIL_CHIMP_SERVER;

  if (!email) {
    return new Response(
      JSON.stringify({
        error: 'Email is required'
      }),
      {
        status: 400,
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  const subData = {
    email_address: email,
    status: 'subscribed',
  };

  const result = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {
    method: 'POST',
    headers: {
      Authorization: `apikey ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(subData)
  });
  const data = await result.json();

  if (!result.ok) {
    return new Response(
      JSON.stringify({
        error: data.error
      }),
      {
        status: 500,
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  return new Response(
    JSON.stringify({
      error: ''
    }),
    {
      status: 201,
      headers: {
        'content-type': 'application/json'
      }
    }
  );
}