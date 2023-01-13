import type { Repos } from '../../types/Github'

export const config = {
  runtime: 'experimental-edge'
};

const GITHUB_PERSONAL_ACCESS_TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN

export default async function handler() {
  const userResponse = await fetch('https://api.github.com/users/joeharwood96', {
    method: 'GET',
    headers: {
        authorization: `token ${GITHUB_PERSONAL_ACCESS_TOKEN}`
    }
  });
  const userReposResponse = await fetch('https://api.github.com/users/joeharwood96/repos?per_page=6&sort=created', {
    method: 'GET',
    headers: {
        authorization: `token ${GITHUB_PERSONAL_ACCESS_TOKEN}`
    }
  });

  const user = await userResponse.json();
  const repositories: Repos = await userReposResponse.json();

  const mine = repositories?.filter((repo) => !repo.fork);
  const stars = mine?.reduce((accumulator, repository) => {
    return accumulator + repository['stargazers_count'];
  }, 0);

  return new Response(
    JSON.stringify({
      followers: user.followers,
      stars,
      repos: repositories
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600'
      }
    }
  );
}