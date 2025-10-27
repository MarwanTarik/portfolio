import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export type projectProps = {
	title: string;
	jobTitle: string;
	description: string;
	tags: string[];
	live?: string;
	github: string;
};

export function Project({
	title,
	description,
	tags,
	live,
	github,
}: projectProps) {
	return (
		<Card
			className="p-6 bg-secondary/50 backdrop-blur-sm border-primary/10 
            hover:border-primary/50 transition-all duration-300 hover:shadow-2xl 
            hover:shadow-primary/10 group hover:-translate-y-2 flex flex-col w-full h-full min-h-[320px]"
		>
			<div className="mb-4 flex-grow">
				<div className="flex items-start justify-between mb-3">
					<h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
						{title}
					</h3>
					<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
					</div>
				</div>

				<p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
					{description}
				</p>

				<div className="flex flex-wrap gap-2 mb-4">
					{tags.map((tag) => (
						<span
							key={tag}
							className="px-2.5 py-1 text-xs font-medium rounded-md 
							bg-primary/10 text-primary border border-primary/20
							hover:bg-primary/20 transition-colors duration-200"
						>
							{tag}
						</span>
					))}
				</div>
			</div>

			<div className="flex gap-3 mt-auto pt-4 border-t border-primary/10">
				<Button
					variant="outline"
					size="sm"
					className="flex-1 border-primary/30 hover:bg-primary/20 hover:border-primary 
					hover:scale-105 transition-all duration-300 group/btn"
					asChild
				>
					<a href={github} target="_blank" rel="noopener noreferrer">
						<Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
						Code
					</a>
				</Button>

				{
					live && (
						<Button
							variant="outline"
							size="sm"
							className="flex-1 border-primary/30 hover:bg-primary/20 hover:border-primary 
							hover:scale-105 transition-all duration-300 group/btn"
							asChild
						>
							<a href={live} target="_blank" rel="noopener noreferrer">
								<ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
								Live
							</a>
						</Button>
					)
				}
			</div>
		</Card>
	);
}
