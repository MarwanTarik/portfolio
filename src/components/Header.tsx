import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./ui/shadcn-io/theme-switcher";

const baseLinkStyle =
  "base-link block px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-black"
const gradientHeaderBgColor = 
    "bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:to-blue-400 text-white" 
const gradientHeaderColor = 
    "bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent transition-colors"


export function Header() {
    const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

    const navigations = [
        { href: 'portforilo',  name: 'Portfolio' },
        { href: 'about', name: 'About' },
        { href:'tech-stack', name: 'Teck Stack' },
        { href: 'projects', name: 'Projects' },
        { href: 'blogs', name: 'Blogs' },
        { href: 'contact', name: 'Contact' }
    ]

    return (
        <div className="header w-full h-20 flex justify-between items-center bg-amber-200 m-auto">
            <div className="logo flex items-center">
                <a href="#portfolio" className={cn(gradientHeaderColor, "text-2xl font-bold", "ml-6")}>
                    Portfilio
                </a>
            </div>

            <div className="header-navs flex items-center">
                <div className="header-links w-fit h-fit flex items-center text-gray-300">
                    {
                        navigations.map(nv => (
                        <a href={nv.href} key={nv.href} className={cn(baseLinkStyle)}>
                            {nv.name}
                        </a>
                        ))
                    }
                </div>

                <div className="theme-switch m-2">
                    <ThemeSwitcher className="bg-amber-600" defaultValue="system" value={theme} onChange={setTheme} />
                </div>

                <div className={cn(gradientHeaderBgColor, "get-in-touch m-6 p-2.5")}>
                    Get in Touch
                </div>
            </div>
        </div>  
    );
}