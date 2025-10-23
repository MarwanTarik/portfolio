import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import type { projectProps } from "@/components/Project";
import type { BlogProp } from "@/components/Blog";

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

export function getBlogList(): BlogProp[] {
	const blogs: BlogProp[] = [
		{
			title: "Building Scalable Web Applications with React and TypeScript",
			date: "2024-10-15",
			thumbnail:
				"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
			content: `
# Building Scalable Web Applications with React and TypeScript

In this blog post, I'll share my experience and best practices for building scalable web applications using React and TypeScript.

## Why TypeScript?

TypeScript brings **type safety** to JavaScript, making it easier to catch bugs early and improve code quality. Here are some key benefits:

- Static type checking
- Better IDE support and autocomplete
- Improved code documentation
- Easier refactoring

## Project Structure

A well-organized project structure is crucial for scalability:

\`\`\`
src/
  components/
  hooks/
  utils/
  types/
  pages/
\`\`\`

## Best Practices

1. **Use functional components** with hooks
2. **Implement proper state management** (Context API or Redux)
3. **Code splitting** for better performance
4. **Write unit tests** for critical components

> "Good code is its own best documentation." - Steve McConnell

## Conclusion

Building scalable applications requires careful planning and following best practices. TypeScript and React together provide a powerful foundation for modern web development.
			`,
		},
		{
			title: "AWS Cloud Architecture: A Beginner's Guide",
			date: "2024-09-20",
			thumbnail:
				"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
			content: `
# AWS Cloud Architecture: A Beginner's Guide

As a 2x AWS Certified professional, I want to share some fundamental concepts about AWS cloud architecture.

## Core AWS Services

### EC2 (Elastic Compute Cloud)
Virtual servers in the cloud that provide scalable computing capacity.

### S3 (Simple Storage Service)
Object storage service with industry-leading scalability and durability.

### RDS (Relational Database Service)
Managed relational database service supporting multiple database engines.

## Architecture Patterns

### Three-Tier Architecture
\`\`\`
Client → Load Balancer → Application Servers → Database
\`\`\`

### Microservices Architecture
Breaking down applications into smaller, independent services that communicate via APIs.

## Key Principles

- **High Availability**: Design for failure
- **Scalability**: Auto-scaling based on demand
- **Security**: Follow the principle of least privilege
- **Cost Optimization**: Use reserved instances and spot instances

## Getting Started

1. Create an AWS account
2. Complete the AWS Cloud Practitioner certification
3. Build small projects to practice
4. Document your learnings

Stay tuned for more detailed posts on specific AWS services!
			`,
		},
		{
			title: "Modern CSS: TailwindCSS vs Traditional CSS",
			date: "2024-08-10",
			thumbnail:
				"https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
			content: `
# Modern CSS: TailwindCSS vs Traditional CSS

Let's explore the differences between utility-first CSS frameworks like TailwindCSS and traditional CSS approaches.

## Traditional CSS

\`\`\`css
.button {
  background-color: blue;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
\`\`\`

## TailwindCSS

\`\`\`html
<button class="bg-blue-500 text-white px-4 py-2 rounded">
  Click me
</button>
\`\`\`

## Pros and Cons

### TailwindCSS Advantages
- **Rapid development**: No need to name classes
- **Consistency**: Pre-defined design system
- **Performance**: Purge unused styles in production
- **Responsive**: Built-in responsive utilities

### TailwindCSS Disadvantages
- **Learning curve**: Need to learn utility classes
- **HTML bloat**: Many classes in HTML
- **Customization**: Requires configuration for custom designs

## My Experience

After using both approaches, I find TailwindCSS excellent for:
- Rapid prototyping
- Maintaining design consistency
- Building responsive layouts quickly

However, traditional CSS still has its place for:
- Complex animations
- Very custom designs
- Projects with strict separation of concerns

## Conclusion

The best approach depends on your project requirements and team preferences. I recommend trying both and choosing what works best for you!
			`,
		},
	];

	return blogs;
}
