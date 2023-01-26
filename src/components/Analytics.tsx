import MetricCard from "./MetricsCard"
import useSWR from 'swr';

import fetcher from '../utils/fetcher';
import type { Repos } from '../types/Github';
import type { Subscribers } from "../types/Forms";
import type { UmamiResponse } from "../types/Umami";

interface GithubData {
    repos: Repos;
    stars: number;
    followers: number;
}

export default function Analytics() {
    const { data: githubData } = useSWR<GithubData>('/api/github', fetcher);
    const { data: emailData } = useSWR<Subscribers>('/api/subscribers', fetcher);
    const { data: umamiData } = useSWR<UmamiResponse>("/api/umami", fetcher);

    const stars = githubData?.stars;
    const followers = githubData?.followers;
    const subscriberCount = emailData?.count;

    const metrics = [
        {
            header: 'Website views',
            link: 'https://umami-production-01f9.up.railway.app/share/NU9w69os/joeharwood.me',
            metric: umamiData?.pageviews?.value || 0,
            isCurrency: false
        },
        {
            header: 'Email Subscribers',
            link: '#',
            metric: subscriberCount || 0,
            isCurrency: false
        },
        {
            header: 'Github Stars',
            link: 'https://github.com/joeharwood96',
            metric: stars || 0,
            isCurrency: false
        },
        {
            header: 'Github Followers',
            link: 'https://github.com/joeharwood96',
            metric: followers || 0,
            isCurrency: false
        }
    ];

    return (
        <div  className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 w-full gap-6">
            {
                metrics.map((data, index) => (
                    <MetricCard
                        key={index}
                        header={data.header}
                        link={data.link}
                        metric={data.metric}
                        isCurrency={data.isCurrency}
                    />
                ))
            }
        </div>
    )
}