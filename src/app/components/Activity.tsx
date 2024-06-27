import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Github } from 'lucide-react';
import { timeSince } from '@/lib/utils'
import Link from "next/link";


type GithubCommit = {
    repo: string;
    message: string;
    url: string;
    createdAt: string;
};


async function getGithubData(): Promise<GithubCommit | null> {
    const response = await fetch(
        'https://api.github.com/users/kaif987/events?per_page=100',
        {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
            next: {
                revalidate: 0,
            },
        },
    );

    const json = await response.json();

    if (Array.isArray(json) && json.length > 0) {
        for (let event of json) {
            if (event.type === 'PushEvent') {
                const ghEvent: GithubCommit = {
                    repo: event.repo.name,
                    message: event.payload.commits[0].message,
                    url: `https://github.com/${event.repo.name}/commit/${event.payload.commits[0].sha}`,
                    createdAt: event.created_at,
                };

                return ghEvent;
            }
        }
    }

    return null;
}

export default async function Activity() {
    const githubData = await getGithubData()

    console.log(githubData)

    return (
        <div className="flex items-center flex-col gap-4 pt-16 sm:flex-row">
            {githubData && (
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-4">
                            {/* <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg> */}
                            <Github />
                            <span className="text-xl font-semibold">Latest Commit</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Link
                            href={`https://github.com/${githubData.repo}`}
                            target="_blank"
                        >
                            <h3 className="font-semibold leading-none tracking-tight">
                                {githubData.repo.replace('haardikk21/', '')}
                            </h3>
                        </Link>
                        <Link href={githubData.url} target="_blank">
                            <p>{githubData.message}</p>
                        </Link>
                        <p className="mt-4 text-muted-foreground">
                            {timeSince(new Date(githubData.createdAt ?? Date.now()))}
                        </p>
                    </CardContent>
                </Card>
            )
            }
            {githubData && (
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-4">
                            {/* <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg> */}
                            <Github />
                            <span className="text-xl font-semibold">Latest Commit</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Link
                            href={`https://github.com/${githubData.repo}`}
                            target="_blank"
                        >
                            <h3 className="font-semibold leading-none tracking-tight">
                                {githubData.repo.replace('haardikk21/', '')}
                            </h3>
                        </Link>
                        <Link href={githubData.url} target="_blank">
                            <p>{githubData.message}</p>
                        </Link>
                        <p className="mt-4 text-muted-foreground">
                            {timeSince(new Date(githubData.createdAt ?? Date.now()))}
                        </p>
                    </CardContent>
                </Card>
            )
            }
            {
                githubData && (
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-4">
                                {/* <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg> */}
                                <Github />
                                <span className="text-xl font-semibold">Latest Commit</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Link
                                href={`https://github.com/${githubData.repo}`}
                                target="_blank"
                            >
                                <h3 className="font-semibold leading-none tracking-tight">
                                    {githubData.repo.replace('haardikk21/', '')}
                                </h3>
                            </Link>
                            <Link href={githubData.url} target="_blank">
                                <p>{githubData.message}</p>
                            </Link>
                            <p className="mt-4 text-muted-foreground">
                                {timeSince(new Date(githubData.createdAt ?? Date.now()))}
                            </p>
                        </CardContent>
                    </Card>
                )
            }
        </div>
    )
}
