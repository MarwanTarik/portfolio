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

export function getHomeSummary(): string {
	return `
    A Software Engineer experienced in Web Development and Cloud Computing: 2x AWS Certified
  `;
}

export function getSummary(): string {
	const summary = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Quibusdam beatae quae molestias libero ut corrupti odit expedita fugit voluptates facere. 
    Nam voluptatibus ex quis itaque ratione, repellendus veritatis fuga molestias!`;

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
	];

	return skills;
}

export function getResumeUrl(): string {
	const resumeUrl = "/Marwan_Tarik_Resume.pdf";
	return resumeUrl;
}

export function getProjectList(): projectProps[] {
	const github = getGithubUrl();

	const projects: projectProps[] = [
		{
			title: "E-Commerce Platform",
			description:
				"A full-stack e-commerce application with payment integration and real-time inventory management",
			tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
			github: github,
			live: "https://ecommerce-demo.example.com",
			jobTitle: "Full-Stack",
		},
		{
			title: "Task Management System",
			description:
				"Collaborative task management tool with real-time updates and team workflows",
			tags: ["TypeScript", "Express", "MongoDB", "Socket.io"],
			github: github,
			live: "https://tasks.example.com",
			jobTitle: "Backend",
		},
		{
			title: "Weather Dashboard",
			description:
				"Interactive weather dashboard with forecasts and historical data visualization",
			tags: ["React", "TailwindCSS", "OpenWeather API"],
			github: github,
			live: "https://weather.example.com",
			jobTitle: "Frontend",
		},
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
