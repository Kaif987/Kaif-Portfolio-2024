import fs from "fs";
import path from "path";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Post = {
    slug: string;
    metadata: PostMetadata;
};

interface PostMetadata {
    title: string;
    publishDate: string;
    [key: string]: any; // Add this if there are other dynamic properties
}

async function getAllPosts(): Promise<Post[]> {
    const dir = path.join(process.cwd(), "writings");
    const files = fs.readdirSync(dir);

    const posts = files.map((filename) => {
        const { metadata } = require(`../../../writings/${filename}`);
        return {
            slug: filename.replace(".mdx", ""),
            metadata,
        };
    });

    // Sort posts by publishDate in descending order (latest on top)
    posts.sort(
        (a, b) =>
            new Date(b.metadata.publishDate).getTime() -
            new Date(a.metadata.publishDate).getTime()
    );

    return posts;
}

export default async function Home() {
    const posts = await getAllPosts();

    return (
        <main className="flex min-h-screen flex-col items-center  gap-12 sm:gap-24 ">
            <div className="w-full">
                <h2 className="text-4xl font-bold mb-8 underline underline-offset-8 ">Writings</h2>
                <ul className="space-y-4">
                    {posts.map((post) => (
                        <Card key={post.slug} className="transition-all duration-300 hover:border-ring">
                            <li className="">
                                <Link className="" href={`/writings/${post.slug}`}>
                                    <CardHeader>
                                        <CardTitle>
                                            {post.metadata.title}
                                        </CardTitle>
                                        <CardDescription>
                                            Published on:{" "}
                                            {new Date(post.metadata.publishDate).toLocaleDateString()}
                                        </CardDescription>
                                    </CardHeader>
                                </Link>
                            </li>
                        </Card>
                    ))}
                </ul>
            </div>
        </main>
    );
}
