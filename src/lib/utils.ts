import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import type { projectProps } from "@/components/Project";
import type { BlogCardProp } from "@/components/BlogCard";

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
	const blogs: BlogCardProp[] = [
		{
			id: 1,
			title: "Getting Started with React Server Components",
			description: "Learn how to leverage React Server Components to build faster, more efficient web applications with improved performance and reduced client-side JavaScript.",
			date: "October 15, 2024",
			thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop"
		},
		{
			id: 2,
			title: "AWS Lambda Best Practices for Production",
			description: "Discover essential tips and patterns for deploying serverless functions at scale, including error handling, cold starts, and cost optimization strategies.",
			date: "October 8, 2024",
			thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop"
		},
		{
			id: 3,
			title: "Building Type-Safe APIs with TypeScript",
			description: "A comprehensive guide to creating robust, type-safe REST APIs using TypeScript, Express, and Zod for runtime validation and schema generation.",
			date: "September 22, 2024",
			thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop"
		},
		{
			id: 4,
			title: "Docker Multi-Stage Builds Explained",
			description: "Optimize your Docker images and reduce build times using multi-stage builds. Learn practical techniques to keep your containers lean and secure.",
			date: "September 10, 2024",
			thumbnail: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=200&fit=crop"
		}
	]
	return blogs;
}
