import { getResumeUrl, getSkills, getSummary } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: About,
});

function About() {
	const summary = getSummary();
	const skills = getSkills();
	const resumeUrl = getResumeUrl();

	return (
		<div className="flex flex-col justify-center items-center gap-8 font-mono mx-auto max-w-7xl px-8 py-16">
			<div className="w-full h-fit p-8 rounded-2xl bg-gradient-to-r from-secondary to-secondary/80 shadow-lg">
				<p className="font-extrabold font-mono text-4xl text-secondary-foreground text-center tracking-tight">
					About Me
				</p>
			</div>

			<div
				className="flex flex-col bg-secondary/50 backdrop-blur-sm justify-center 
            items-start font-mono gap-8 w-full h-full p-8 rounded-2xl border border-primary/10 
            shadow-xl hover:shadow-2xl transition-all duration-300"
			>
				<div className="space-y-4">
					<h2 className="text-2xl font-bold text-primary">Summary</h2>

					<p className="text-lg font-normal leading-relaxed text-foreground/90">
						{summary}
					</p>
				</div>

				<a
					className="group relative overflow-hidden border-2 border-primary bg-primary 
                    text-primary-foreground font-semibold hover:bg-transparent hover:text-primary 
                    transition-all duration-300 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl
                    hover:scale-105 active:scale-95 flex items-center gap-2"
					href={resumeUrl}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<title>Download icon</title>
						<path
							fillRule="evenodd"
							d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1
                         0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 
                         111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
					Download Resume
				</a>
			</div>

			<div
				className="w-full flex flex-col gap-6 bg-secondary/50 backdrop-blur-sm p-8 
            rounded-2xl border border-primary/10 shadow-xl"
			>
				<h2 className="text-3xl font-bold text-primary text-center">
					Skills & Technologies
				</h2>

				<div className="flex flex-wrap gap-4 justify-center items-center">
					{skills.map((skill) => (
						<span
							key={skill}
							className="px-4 py-2 bg-primary/10 hover:bg-primary/20 
                            border border-primary/30 rounded-lg text-foreground font-medium
                            transition-all duration-300 hover:scale-110 hover:shadow-lg
                            cursor-default"
						>
							{skill}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
