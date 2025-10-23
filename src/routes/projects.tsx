import { Project } from "@/components/Project";
import { getProjectList } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
	component: Projects,
});

function Projects() {
	const projects = getProjectList();

	return (
		<div className="projects flex flex-col justify-center items-center gap-10 font-mono mx-auto max-w-7xl px-8 py-16">
			<div className="w-full h-fit p-8 rounded-2xl bg-gradient-to-r from-secondary to-secondary/80 shadow-lg">
				<p className="font-extrabold font-mono text-4xl text-secondary-foreground text-center tracking-tight">
					Projects
				</p>
				<p className="text-center text-muted-foreground mt-2 text-sm">
					Explore my latest work and side projects
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
				{projects.map((project, index) => (
					<div
						key={project.title}
						className="animate-fade-in"
						style={{ animationDelay: `${index * 100}ms` }}
					>
						<Project
							title={project.title}
							description={project.description}
							tags={project.tags}
							github={project.github}
							live={project.live}
							jobTitle={project.jobTitle}
						/>
					</div>
				))}
			</div>

			{projects.length === 0 && (
				<div className="text-center py-12 text-muted-foreground">
					<p className="text-xl mb-2">No projects yet</p>
					<p className="text-sm">Check back soon for updates!</p>
				</div>
			)}
		</div>
	);
}
