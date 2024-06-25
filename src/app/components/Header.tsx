'use client'
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
    const PAGES = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Projects",
            href: "/projects"
        },
        {
            name: "Writings",
            href: "/writings"
        },
        {
            name: "Contact",
            href: "/contact"
        }
    ]

    const pathname = usePathname()
    const isActive = (href: string) => href === pathname

    return (
        <nav className="mx-auto max-w-6xl flex items-center justify-between py-4">
            <ul className="flex gap-4">
                {PAGES.map(page => {
                    return <Link href={page.href} key={page.href} className={cn("text-sm",
                        isActive(page.href) && "font-bold"
                    )}>
                        {page.name}
                    </Link>
                })}
            </ul>
            <ThemeToggle />
        </nav>
    )
}
