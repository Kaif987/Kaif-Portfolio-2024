import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { SquareCode, Server, Database } from "lucide-react";

export default function Skills() {
    return (
        <div className="flex flex-col justify-center gap-5 p-10 w-full sm:flex-row">
            <Card className="w-full flex flex-col items-center justify-center">
                <CardHeader>
                    <div className="flex flex-col items-center gap-2">
                        <SquareCode className="h-9" />
                        <CardTitle>Frontend Development</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li>React</li>
                        <li>Tailwind CSS</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>Recoil</li>
                        <li>Redux</li>
                        <li>Shadcn UI</li>
                    </ul>
                </CardContent>
            </Card>
            <Card className='w-full flex flex-col items-center justify-center'>
                <CardHeader>
                    <div className="flex flex-col items-center gap-2">
                        <Server />
                        <CardTitle>Backend Development</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li>Nodejs</li>
                        <li>Express</li>
                        <li>Nextjs</li>
                        <li>CloudFlare workers</li>
                        <li>Hono js</li>
                    </ul>
                </CardContent>
            </Card>
            <Card className="w-full flex flex-col items-center justify-center">
                <CardHeader>
                    <div className="flex flex-col items-center gap-2">
                        <Database />
                        <CardTitle>Databases and Tools</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>Prisma</li>
                        <li>Git</li>
                        <li>Docker</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}
