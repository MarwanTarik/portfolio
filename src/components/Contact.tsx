import { getGithubUrl, getLinkedinUrl } from "@/lib/utils";
import { Instagram, Youtube, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
	const linkedinUrl = getLinkedinUrl();
	const githubUrl = getGithubUrl();

	return (
		<div className="w-full py-16 px-8 bg-primary text-black">
			<div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
				<div className="flex-1">
					<h2 className="text-5xl font-black mb-6">Get in Touch</h2>

					<p className="text-lg leading-relaxed max-w-xl">
						If you are interested in my work or want to provide feedback about
						this website, I am open to exchanging ideas.
					</p>
				</div>

				<div className="flex flex-col items-start gap-6">
					<div className="flex flex-col items-start gap-2">
						<p className="text-base font-semibold">Follow me on</p>

						<div className="flex justify-start gap-4 items-start">
							<a
								href={linkedinUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-70 transition-opacity"
								aria-label="LinkedIn"
							>
								<Linkedin className="w-7 h-7" />
							</a>
							<a
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-70 transition-opacity"
								aria-label="GitHub"
							>
								<Github className="w-7 h-7" />
							</a>
						</div>
					</div>

					<button
						type="button"
						className="bg-transparent border-2 border-black
             text-black px-6 py-3 rounded-full text-base font-bold 
             hover:bg-black hover:text-primary transition-all duration-300 flex  gap-2"
					>
						Contact Me
						<Send className="w-5 h-5" />
					</button>
				</div>
			</div>
		</div>
	);
}
