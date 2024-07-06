import React from 'react'
import ProjectCard from './project-cards'


export default function Work() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-4xl md:text-6xl font-bold py-6 dark:text-slate-300'>My Recent Works</h1>
            <p className='p-5 text-xl'>Here are a few projects that I have worked on</p>
            <div className='flex flex-col items-center gap-10 pt-24 lg:flex-row lg:gap-4'>
                <ProjectCard
                    href="https://medium-backend-cloudflare.vercel.app/"
                    name="Blogging Application"
                    languages={["Nextjs", "Shadcn", "Cloudflare"]}
                    description="A web app that allows user to publish and view blogs"
                    image_url="/blog-thumbnail.jpeg"
                />
                <ProjectCard
                    href="https://ieee-woad-xi.vercel.app/"
                    name="Campus Tutor"
                    languages={["Nextjs", "Javascript", "Tailwind CSS"]}
                    description="An online learning system for students to get enrolled into courses and track their progress"
                    image_url="/ELMS.jpeg" />
                <ProjectCard
                    href="https://expense-tracker-app-231231.netlify.app/"
                    name="Expense Tracker App"
                    languages={["Express", "React", "React Router DOM"]}
                    description="A web app that allows user to publish and view blogs"
                    image_url="/expense-manager.jpeg"
                />
            </div>
            <div>
            </div>
        </div>
    )
}
