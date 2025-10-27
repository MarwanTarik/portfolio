import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import type { projectProps } from "@/components/Project";
import type { BlogCardProp } from "@/components/BlogCard";
import type { BlogIndex } from "@/types/types";
import blogIndexData from "../../public/blogs/index.json";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getLinkedinUrl(): string {
	return "https://www.linkedin.com/in/marwan-tarik/";
}

export function getGithubUrl(): string {
	return "https://github.com/MarwanTarik";
}

export function getEmail(): string {
	return "marwantarik64@gmail.com";
}

export function getHomeSummary(): string {
	return `
	Software Engineer with hands-on experience in Full-Stack Web Development and Cloud Computing,
	and strong interests in Systems Engineering and DevOps.
	Holding 2× AWS Certifications,
	with a solid foundation in computer science and a focus on building scalable, 
	efficient applications. Passionate about continuous learning, 
	emerging technologies, and solving complex technical challenges to deliver impactful, high-quality solutions.
  `;
}

export function getSummary(): string {
	const summary = `
	Software Engineer with hands-on experience in Full-Stack Web Development and Cloud Computing,
	and strong interests in Systems Engineering and DevOps.
	Holding 2× AWS Certifications,
	with a solid foundation in computer science and a focus on building scalable, 
	efficient applications. Passionate about continuous learning, 
	emerging technologies, and solving complex technical challenges to deliver impactful, high-quality solutions.
	`;

	return summary;
}

export function getSkills(): string[] {
	const skills = [
		"JavaScript",
		"TypeScript",
		"React",
		"Node.js",
		"Python",
		"Docker",
		"Git",
		"SQL",
		"TailwindCSS",
		"Next.js",
		"AWS",
		"MongoDB",
		"PostgreSQL",
		"C#",
		"ASP.NET Core",
		"Entity Framework",
		"Azure",
		"Linux",
		"Jest",
		"xUnit",
		"Gunit",
		"RESTful APIs",
		"HTML",
		"CSS",
		"Chakra UI",
		"Terraform",
		"GitHub Actions",
	];

	return skills;
}

export function getResumeUrl(): string {
	return "https://drive.google.com/file/d/1gQYyqbwBe_at2yNMX4NrVfjQg-YnqAdG/view?usp=drive_link";
}

export function getProjectList(): projectProps[] {
	const github = getGithubUrl();

	const projects: projectProps[] = [
		{
			title: "Bustub",
			description: "A Relational Database Management System",
			tags: ["C++", "Database", "Systems", "CMake", "SQL"],
			live: undefined,
			github: `${github}/bustub`,
			jobTitle: "Systems Project",
		},
		{
			title: "Skillbridge",
			description:
				"A platform connecting learners with industry experts for skill development.",
			tags: ["ASP.NET Core", "React", "TypeScript", "Azure", "Chakra UI", "MSSQL", 
				"GitHub Actions", "Docker", "FFmpeg", "NLP"],
			live: undefined,
			github: `${github}/SkillBridge-GraduationProject/skillBridge`,
			jobTitle: "Full-Stack Developer",
		},
		{
			title: "Eshtarek",
			description: "A subscription Management Platform",
			tags: ["Django REST Framework", "PostgreSQL", "Docker", "JWT", "RLS", "Swagger"],
			live: undefined,
			github: `${github}/eshtarek`,
			jobTitle: "Backend Developer",
		},
		{
			title: "Courses Hub",
			description: "Courses Registration Management System",
			tags: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Jest", "JWT", "Docker"],
			live: undefined,
			github: `${github}/courses-hub`,
			jobTitle: "Backend Developer",
		},
		{
			title: "HyperMart",
			description: "A Restful API designed to manage an E-commerce Applications",
			tags: ["TypeScript", "Node.js", "Express", "PostgresSQL", "Jest", "Sqlize"],
			live: undefined,
			github: `${github}/HyperMart`,
			jobTitle: "Backend Developer",
		}
	];

	return projects;
}

export function getBlogList(): BlogCardProp[] {
	const blogIndex = blogIndexData as BlogIndex[];

	const blogs: BlogCardProp[] = blogIndex.map((blog) => ({
		id: blog.id,
		title: blog.title,
		description: blog.description,
		date: blog.date,
		thumbnail: blog.thumbnail,
	}));

	return blogs;
}
