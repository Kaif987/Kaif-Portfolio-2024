import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

type ProjectCardType = {
    name: string,
    href: string,
    languages: string[],
    description: string,
    image_url: string
}

export default function ProjectCard({ name, href, languages, description, image_url }: ProjectCardType) {
    return (
        <div className='relative card rounded-lg overflow-hidden w-96'>
            <Image src={image_url} alt='project image' width={0} height={0} sizes="100vw" className='w-full h-full rounded-lg' />
            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-slate-900 opacity-80 px-4 py-2 rounded text-2xl text-center font-bold '>{name}</span>
            <div className='description'>
                <div className='absolute inset-0 bg-sky-950 px-5 text-center flex flex-col justify-center items-center'>
                    <p className='text-white text-base text-center lg:text-2xl'>{description}</p>
                    <div className='border-2 border-purple-600 my-4 px-6 py-2 rounded-3xl hover:bg-purple-600 transition-all duration-200'>
                        <div className='flex items-center'>
                            <Link href={href} className='text-white'>Visit Website</Link>
                            <ChevronRight className='text-white' />
                        </div>
                    </div>
                    <div className='flex gap-3 text-white mt-8'>
                        {languages.map(language => {
                            return <span key={language} className='bg-gray-600 px-2 py-1 rounded'>{language}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default function ProjectCard() {
//     return (
//         <div>
//             <Link href={"#"}>
//                 <Card>
//                     <CardHeader>
//                         <img src='/blog-thumbnail.jpeg' className='grayscale hover:grayscale-0 transition-all duration-300' />
//                         <CardTitle>
//                             Blogging Application
//                         </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <CardDescription>
//                             Some Description about the project
//                         </CardDescription>
//                     </CardContent>
//                     <CardFooter className='flex gap-2'>
//                         <span className='bg-slate-200 px-2 py-1 rounded dark:bg-slate-600'>javascript</span>
//                         <span className='bg-slate-200 px-2 py-1 rounded dark:bg-slate-600'>javascript</span>
//                         <span className='bg-slate-200 px-2 py-1 rounded dark:bg-slate-600'>javascript</span>
//                     </CardFooter>
//                 </Card>
//             </Link>
//         </div>
//     )
// }
