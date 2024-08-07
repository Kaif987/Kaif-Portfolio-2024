import fs from "fs";
import path from "path";
import React from "react";
import dynamic from "next/dynamic";
import type { Metadata, ResolvingMetadata } from "next";
import ScrollProgress from "@/components/ui/scroll-progress";

type Props = {
    params: { slug: string };
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const post = await getPost(params);
    return {
        title: post.metadata.title || "Untitled Post",
        description: post.metadata.title || "No description",
    };
}

async function getPost({ slug }: { slug: string }) {
    try {
        const mdxPath = path.join(process.cwd(), "writings", `${slug}.mdx`);
        if (!fs.existsSync(mdxPath)) {
            throw new Error(`MDX file for slug ${slug} does not exist`);
        }

        const { metadata } = await import(`../../../../writings/${slug}.mdx`);

        return {
            slug,
            metadata,
        };
    } catch (error) {
        console.error("Error fetching post:", error);
        throw new Error(`Unable to fetch the post for slug: ${slug}`);
    }
}

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join(process.cwd(), "writings"));
    const params = files.map((filename) => ({
        slug: filename.replace(".mdx", ""),
    }));

    return params;
}

export default async function Page({ params }: { params: { slug: string } }) {
    // const { scrollYProgress } = useScroll()
    const { slug } = params;

    const post = await getPost(params);
    // Dynamically import the MDX file based on the slug
    const MDXContent = dynamic(() => import(`../../../../writings/${slug}.mdx`));

    return (
        <>
            <ScrollProgress />
            <article className="pt-6">
                <div className="pb-8">
                    <h1 className="text-6xl font-black pb-4">{post.metadata.title}</h1>
                    <p>
                        Published on:{" "}
                        {new Date(post.metadata.publishDate).toLocaleDateString()}
                    </p>
                </div>
                <MDXContent />
            </article>
        </>
    );
}
