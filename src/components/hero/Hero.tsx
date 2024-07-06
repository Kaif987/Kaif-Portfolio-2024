import Activity from "../../app/components/Activity";
import Avatar from "./avatar"

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-between md:flex-row py-28">
            <div className="flex flex-col">
                <div>
                    <h1 className="text-4xl font-bold dark:text-slate-200">Kaif Mohammad</h1>
                    <h3 className="text-2xl py-2  dark:text-slate-200 font-medium">Full Stack Developer</h3>
                    <p className="dark:text-slate-200 max-w-xl mt-4 text-xl">I build pixel-perfect, engaging, and accessible digital experiences.</p>
                </div>
                {/* <div className="flex items-center justify-between pt-28 gap-4 max-w-md">
                    <div className="max-w-xs text-sm text-slate-200">
                        <p>Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
                    </div>
                    <div className="max-w-xs text-sm text-slate-200">
                        <p>Over a decade of experience building products for clients across several countries.</p>
                    </div>
                </div> */}
                {/* <Activity /> */}
            </div>
            <Avatar />
        </div>
    )
}
