import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Project } from "@/components/Project";
import {
	getGithubUrl,
	getHomeSummary,
	getLinkedinUrl,
	getProjectList,
} from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="home flex flex-col justify-center items-center gap-8 font-mono mx-auto max-w-7xl px-8 pb-16">
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
					<Linkedin className="w-7 h-7 text-primary" />
				</a>

				<a href={githubUrl} target="_blank" rel="noopener noreferrer">
					<Github className="w-7 h-7 text-primary" />
				</a>
			</div>
		</div>
	);
}

function HomeSummaryComponnent() {
	const summary = getHomeSummary();
	const navigate = useNavigate();

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
				className="bg-primary text-primary-foreground px-8 py-2.5 rounded-lg text-base
				 font-semibold hover:opacity-90 transition-opacity self-end"
				onClick={() =>
					navigate({
						to: "/about",
					})
				}
			>
				More...
			</button>
		</div>
	);
}

function HomeProjectsComponennent() {
	const projects = getProjectList().slice(0, 3);
	const navigate = useNavigate();

	return (
		<div className="projects w-full h-fit flex flex-col gap-6">
			<div className="w-full h-fit p-8 rounded-2xl bg-gradient-to-r from-secondary to-secondary/80 shadow-lg">
				<p className="font-extrabold font-mono text-4xl text-secondary-foreground text-center tracking-tight">
					Projects
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
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

			<button
				type="button"
				className="bg-primary text-primary-foreground px-8 py-2.5 rounded-lg text-base
				 font-semibold hover:opacity-90 transition-opacity self-end"
				onClick={() =>
					navigate({
						to: "/projects",
					})
				}
			>
				More...
			</button>
		</div>
	);
}
