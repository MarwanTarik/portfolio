import { createFileRoute } from "@tanstack/react-router";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getGithubUrl, getLinkedinUrl } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col gap-8 w-full justify-center items-center mx-auto max-w-7xl px-8 py-16">
			<div className="w-full h-fit p-8 rounded-2xl bg-gradient-to-r from-secondary to-secondary/80 shadow-lg">
				<p className="font-extrabold font-mono text-4xl text-secondary-foreground text-center tracking-tight">
					Get In Touch
				</p>
				<p className="text-center text-muted-foreground mt-2 text-sm">
					Let's build something amazing together
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
				<ContactInfo />
				<ContactLinks />
			</div>
		</div>
	);
}

function ContactLinks() {
	const github = getGithubUrl();
	const linkedin = getLinkedinUrl();

	return (
		<Card className="border border-border/50 bg-secondary/50 shadow-xl hover:shadow-2xl transition-all duration-300">
			<CardContent className="p-8">
				<h2 className="text-2xl font-bold mb-6 text-primary">
					Connect With Me
				</h2>

				<div className="space-y-4">
					<a
						href={linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
					>
						<Linkedin className="w-6 h-6 text-primary" />
						<div className="flex-1">
							<p className="font-semibold group-hover:text-primary transition-colors">
								LinkedIn
							</p>
							<p className="text-xs text-muted-foreground">
								Let's connect professionally
							</p>
						</div>
					</a>

					<a
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
					>
						<Github className="w-6 h-6 text-primary" />
						<div className="flex-1">
							<p className="font-semibold group-hover:text-primary transition-colors">
								GitHub
							</p>
							<p className="text-xs text-muted-foreground">
								Check out my projects
							</p>
						</div>
					</a>
				</div>
			</CardContent>
		</Card>
	);
}

function ContactInfo() {
	return (
		<Card className="border border-border/50 bg-secondary/50 shadow-xl hover:shadow-2xl transition-all duration-300">
			<CardContent className="p-8">
				<h2 className="text-2xl font-bold mb-6 text-primary">
					Contact Information
				</h2>

				<div className="space-y-6">
					<div className="flex items-start gap-4 group">
						<div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
							<Mail className="w-5 h-5 text-primary" />
						</div>
						<div className="flex-1">
							<h3 className="font-semibold mb-1">Email</h3>
							<a
								href="mailto:marwantarik64@gmail.com"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								marwantarik64@gmail.com
							</a>
						</div>
					</div>

					<div className="flex items-start gap-4 group">
						<div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
							<MapPin className="w-5 h-5 text-primary" />
						</div>
						<div className="flex-1">
							<h3 className="font-semibold mb-1">Location</h3>
							<p className="text-sm text-muted-foreground">
								Available for remote opportunities worldwide
							</p>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
