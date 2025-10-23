import { Link } from "@tanstack/react-router";

export function Header() {
	const navigations = [
		{ to: "/home", name: "Home" },
		{ to: "/about", name: "About" },
		{ to: "/projects", name: "Projects" },
		{ to: "/blogs", name: "Blogs" },
		{ to: "/contact", name: "Contact" },
	];

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
		</div>
	);
}
