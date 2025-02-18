import Skills from "./skills";

export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center text-center py-10">
            <h1 className="text-4xl md:text-6xl font-bold py-6 dark:text-slate-300">About Me</h1>
            <p className="p-5 text-lg">Hello my name is Mohammad Kaif and I enjoy creating things that live on
                the internet. I was introduced to programming (QBASIC) back in 2016 and I fell in love
                with programming ever since.
        
                Fast forward to now, I now work remotely trying to solve business related problems for
                my clients.
            </p>
            <Skills />
        </div>
    )
}
