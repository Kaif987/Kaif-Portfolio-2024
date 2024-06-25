export default function Contact() {
    return (
        <div className="flex w-full items-center justify-between py-8">
            <div className="flex max-w-prose flex-col justify-between">
                <div className="flex w-fit items-end border-b pb-2">
                    <h2 className="text-4xl font-semibold">Contact</h2>
                </div>

                <ul className="mt-6 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                        <span className="font-semibold">Email:</span>
                        <a href="mailto:mdkaifprofession@gmail.com">mdkaifprofession@gmail.com</a>
                    </li>

                    <li className="flex items-center gap-2">
                        <span className="font-semibold">Twitter:</span>
                        <a href="https://twitter.com/KaifSiddiquiDev">@KaifSiddiquiDev</a>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="font-semibold">Github:</span>
                        <a href="https://github.com/kaif987">@Kaif987</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
