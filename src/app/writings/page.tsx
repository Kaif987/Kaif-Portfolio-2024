// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardHeader,
//     CardTitle,
// } from '@/components/ui/card';
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import Link from 'next/link';

// export default function Writings() {
//     const dir = 'writings';
//     const files = fs.readdirSync(path.join(dir));
//     const writings = files.map((filename) => {
//         const fileContent = fs.readFileSync(path.join(dir, filename), 'utf-8');
//         const { data: frontMatter } = matter(fileContent);
//         return {
//             meta: frontMatter,
//             slug: filename.replace('.mdx', ''),
//         };
//     });

//     return (
//         <div className="flex flex-col gap-6">
//             <div className="flex w-fit items-end border-b pb-2">
//                 <h2 className="text-4xl font-semibold">Writings</h2>
//             </div>
//             {writings.map((writing) => (
//                 <Link href={`/writings/${writing.slug}`} passHref key={writing.slug}>
//                     <Card className="transition-all duration-300 hover:border-ring">
//                         <CardHeader>
//                             <CardTitle>{writing.meta.title}</CardTitle>
//                             <CardDescription>{writing.meta.date}</CardDescription>
//                         </CardHeader>

//                         <CardContent>
//                             <p className="text-muted-foreground">
//                                 {writing.meta.description}
//                             </p>
//                         </CardContent>
//                     </Card>
//                 </Link>
//             ))}

//             <p className="text-sm text-muted-foreground">
//                 I&apos;m still working on aggregating my older posts from other
//                 platforms here. More coming soon!
//             </p>
//         </div>
//     );
// }

import fs from "fs";
import path from "path";
import Link from "next/link";
import { Metadata } from "next";

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
        <main className="flex min-h-screen flex-col items-center  gap-12 sm:gap-24 p-6 sm:p-24">
            <div>Next MDX Configure Static Blog</div>
            <div className="sm:w-3/4">
                As of Next JS 14 we can configure our apps to support MDX using the
                @next/mdx package. Find instructions{" "}
                <Link
                    target="_blank"
                    className="font-bold"
                    href="https://nextjs.org/docs/app/building-your-application/configuring/mdx"
                >
                    here.
                </Link>
            </div>
            <div className="w-full">
                <h2 className="text-4xl font-bold mb-8">MDX Posts</h2>
                <ul className="space-y-4">
                    {posts.map((post) => (
                        <li key={post.slug} className="p-4 border rounded-md shadow ">
                            <Link className="" href={`/writings/${post.slug}`}>
                                <p className="text-2xl font-bold hover:underline">
                                    {post.metadata.title}
                                </p>

                                <p className="text-gray-500">
                                    Published on:{" "}
                                    {new Date(post.metadata.publishDate).toLocaleDateString()}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
