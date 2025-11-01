import { Github, Linkedin, Send } from "lucide-react";
import { getEmail, getGithubUrl, getLinkedinUrl } from "@/lib/utils";

export function Footer() {
	const linkedinUrl = getLinkedinUrl();
	const githubUrl = getGithubUrl();
	const email = getEmail();

	return (
		<div className="w-full py-6 md:py-8 lg:py-10 px-4 md:px-6 lg:px-8 bg-primary text-black">
			<div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 md:gap-8">
				<div className="flex-1 w-full lg:w-auto">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">Get in Touch</h2>

					<p className="text-base md:text-lg leading-relaxed w-full lg:max-w-xl">
						If you are interested in my work or want to provide feedback about
						this website, I am open to exchanging ideas.
					</p>
				</div>

				<div className="flex flex-col items-start lg:items-end gap-4 md:gap-6 w-full lg:w-auto">
					<div className="flex flex-col items-start lg:items-end gap-2">
						<p className="text-sm md:text-base font-semibold">Follow me on</p>

						<div className="flex justify-start gap-3 md:gap-4 items-start">
							<a
								href={linkedinUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-70 transition-opacity"
								aria-label="LinkedIn"
							>
								<Linkedin className="w-6 h-6 md:w-7 md:h-7" />
							</a>
							<a
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-70 transition-opacity"
								aria-label="GitHub"
							>
								<Github className="w-6 h-6 md:w-7 md:h-7" />
							</a>
						</div>
					</div>

					<a
						href={`mailto:${email}`}
						className="bg-transparent border-2 border-black
							text-black px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-bold 
							hover:bg-black hover:text-primary transition-all duration-300 flex gap-2 items-center"
					>
						Contact Me
						<Send className="w-4 h-4 md:w-5 md:h-5" />
					</a>
				</div>
			</div>
		</div>
	);
}
