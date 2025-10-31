import { Link } from "@tanstack/react-router";
import { Moon, MoonIcon, SunIcon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import { Toggle } from "./ui/toggle";
import { saveThemeToCookie } from "@/lib/themeManager";

export function Header() {
	const navigations = [
		{ to: "/", name: "Home" },
		{ to: "/about", name: "About" },
		{ to: "/projects", name: "Projects" },
		{ to: "/blogs", name: "Blogs" },
		{ to: "/contact", name: "Contact" },
	];

	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div className="header w-full h-20 flex justify-center items-center bg-blend-darken m-auto">
			{navigations.map((nv) => (
				<Link
					to={nv.to}
					key={nv.name}
					className="text-lg m-6 font-normal font-mono hover:text-primary"
				>
					{nv.name}
				</Link>
			))}

			<Toggle
				aria-label="theme-toggle"
				size="sm"
				variant="default"
				className="!hover:bg-transparent !bg-transparent"
				onClick={() => {
					const newTheme = theme === 'light' ? 'dark' : 'light';
					setTheme(newTheme)
					saveThemeToCookie(newTheme)
				}}
			>
				{theme === "light" ? <MoonIcon /> : <SunIcon />}
			</Toggle>
		</div>
	);
}
