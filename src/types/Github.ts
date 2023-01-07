export type Repo = {
    name: string;
    description: string;
    stars: number;
    forks: number;
    svn_url: string;
    fork: string;
    stargazers_count: number;
}

export type Repos = Repo[]