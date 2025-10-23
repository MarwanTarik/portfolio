import { createFileRoute } from "@tanstack/react-router";
import { Project, type projectProps } from "@/components/Project";
import {
	getGithubUrl,
	getHomeSummary,
	getLinkedinUrl,
	getProjectList,
} from "@/lib/utils";

export const Route = createFileRoute("/home")({
	component: Home,
});

function Home() {
	return (
		<div className="home flex flex-col justify-center items-center gap-16 font-mono mx-auto max-w-7xl px-8 pb-16">
			<HomeIntroComponnent />
			<HomeSummaryComponnent />
			<HomeProjectsComponennent />
		</div>
	);
}

function HomeIntroComponnent() {
	const linkedinUrl = getLinkedinUrl();
	const githubUrl = getGithubUrl();

	return (
		<div className="home-about w-full mt-12 flex flex-col justify-center items-center gap-4">
			<div className="text-primary flex flex-col max-w-xl justify-center text-center px-4">
				<p className="text-2xl">Hey There I'm</p>
				<p className="text-6xl font-bold">Marwan Tarik</p>
				<p className="text-lg leading-relaxed max-w-md mx-auto">
					A Software Engineer experienced in Web Development and Cloud
					Computing: 2x AWS Certified
				</p>
			</div>

			<div className="flex gap-6 mt-2">
				<a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
					<img
						src="../../public/linkedin-svgrepo-com.svg"
						alt="linkedin"
						className="w-6 hover:opacity-80 transition-opacity cursor-pointer"
					/>
				</a>

				<a href={githubUrl} target="_blank" rel="noopener noreferrer">
					<img
						src="../../public/github-brands-solid-full.svg"
						alt="github"
						className="w-6 hover:opacity-80 transition-opacity cursor-pointer"
					/>
				</a>
			</div>
		</div>
	);
}

function HomeSummaryComponnent() {
	const summary = getHomeSummary();

	return (
		<div className="home-summary rounded-2xl w-full py-12 px-8 bg-secondary text-secondary-foreground flex flex-col">
			<div className="text-center mx-auto max-w-4xl mb-8">
				<p className="font-extrabold font-mono text-4xl text-secondary-foreground text-center tracking-tight mb-6">
					{" "}
					About{" "}
				</p>
				<p className="font-normal text-lg leading-relaxed"> {summary} </p>
			</div>

			<button
				type="button"
				className="bg-primary text-primary-foreground px-8 py-2.5 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity self-end"
			>
				More...
			</button>
		</div>
	);
}

function HomeProjectsComponennent() {
	const projects = getProjectList();

	return (
		<div className="projects w-full h-fit flex flex-col gap-6">
			<div className="w-full h-fit p-8 rounded-2xl bg-gradient-to-r from-secondary to-secondary/80 shadow-lg">
				<p className="font-extrabold font-mono text-4xl text-secondary-foreground text-center tracking-tight">
					Projects
				</p>
			</div>

			<div className="flex gap-6">
				{projects.map((project) => (
					<Project
						key={project.title}
						title={project.title}
						description={project.description}
						tags={project.tags}
						github={project.github}
						live={project.live}
						jobTitle={project.jobTitle}
					/>
				))}
			</div>
		</div>
	);
}
