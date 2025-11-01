import { Link } from "@tanstack/react-router";
import { MoonIcon, SunIcon, Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/themeContext";
import { saveThemeToCookie } from "@/lib/themeManager";
import { Toggle } from "./ui/toggle";

export function Header() {
	const navigations = [
		{ to: "/", name: "Home" },
		{ to: "/about", name: "About" },
		{ to: "/projects", name: "Projects" },
		{ to: "/blogs", name: "Blogs" },
		{ to: "/contact", name: "Contact" },
	];

	const { theme, setTheme } = useContext(ThemeContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<div className="header w-full min-h-20 flex justify-between items-center bg-blend-darken px-4 md:px-6 lg:px-8 py-4">
				<nav className="hidden md:flex flex-1 justify-center items-center gap-2 lg:gap-4">
					{navigations.map((nv) => (
						<Link
							to={nv.to}
							key={nv.name}
							className="text-sm lg:text-lg px-2 lg:px-4 font-normal font-mono hover:text-primary transition-colors"
						>
							{nv.name}
						</Link>
					))}
				</nav>

				<button
					type="button"
					className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>

				<div className="md:ml-auto">
					<Toggle
						aria-label="theme-toggle"
						size="sm"
						variant="default"
						className="!hover:bg-transparent !bg-transparent"
						onClick={() => {
							const newTheme = theme === "light" ? "dark" : "light";
							setTheme(newTheme);
							saveThemeToCookie(newTheme);
						}}
					>
						{theme === "light" ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
					</Toggle>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden w-full bg-background border-b">
					<nav className="flex flex-col py-4 px-4 gap-2">
						{navigations.map((nv) => (
							<Link
								to={nv.to}
								key={nv.name}
								className="text-base px-4 py-2 font-normal font-mono hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								{nv.name}
							</Link>
						))}
					</nav>
				</div>
			)}
		</>
	);
}
