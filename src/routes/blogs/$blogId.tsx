import { createFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { useBlog } from "@/hooks/useBlog";

export const Route = createFileRoute("/blogs/$blogId")({
	loader: ({ params }) => params.blogId,
	component: Blog,
});

function Blog() {
	const { blogId } = Route.useParams();
	const blogData = useBlog(blogId);

	if (blogData === undefined) {
		return (
			<div className="container mx-auto px-4 py-8">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-destructive">
						Blog post not found
					</h1>
					<p className="text-muted-foreground mt-2">
						The requested blog post could not be loaded.
					</p>
				</div>
			</div>
		);
	}

	return (
		<article className="container mx-auto px-4 py-8 max-w-4xl">
			<header className="mb-8">
				{blogData.thumbnail && (
					<div className="mb-6 rounded-lg overflow-hidden shadow-lg">
						<img
							src={blogData.thumbnail}
							alt={blogData.title}
							className="w-full h-64 md:h-96 object-cover"
						/>
					</div>
				)}

				<h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
					{blogData.title}
				</h1>

				<div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
					<time className="flex items-center gap-2">
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						{new Date(blogData.date).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</time>
				</div>

				{blogData.description && (
					<p className="text-lg text-muted-foreground leading-relaxed">
						{blogData.description}
					</p>
				)}
			</header>

			<hr className="border-border mb-8" />

			<div className="prose prose-lg dark:prose-invert max-w-none">
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw, rehypeHighlight]}
					components={{
						img: ({ node, alt, ...props }) => (
							<img
								{...props}
								alt={alt || "Blog image"}
								className="w-full rounded-lg shadow-lg my-6 object-cover max-h-[500px]"
								loading="lazy"
							/>
						),
						p: ({ node, children, ...props }) => (
							<p
								className="text-base leading-relaxed text-foreground mb-4"
								{...props}
							>
								{children}
							</p>
						),
						h1: ({ node, children, ...props }) => (
							<h1
								className="text-3xl font-bold mt-8 mb-4 text-foreground"
								{...props}
							>
								{children}
							</h1>
						),
						h2: ({ node, children, ...props }) => (
							<h2
								className="text-2xl font-semibold mt-8 mb-3 text-foreground"
								{...props}
							>
								{children}
							</h2>
						),
						h3: ({ node, children, ...props }) => (
							<h3
								className="text-xl font-semibold mt-6 mb-3 text-foreground"
								{...props}
							>
								{children}
							</h3>
						),
						h4: ({ node, children, ...props }) => (
							<h4
								className="text-lg font-semibold mt-4 mb-2 text-foreground"
								{...props}
							>
								{children}
							</h4>
						),
						ul: ({ node, children, ...props }) => (
							<ul
								className="list-disc list-inside mb-4 space-y-2 text-foreground"
								{...props}
							>
								{children}
							</ul>
						),
						ol: ({ node, children, ...props }) => (
							<ol
								className="list-decimal list-inside mb-4 space-y-2 text-foreground"
								{...props}
							>
								{children}
							</ol>
						),
						li: ({ node, children, ...props }) => (
							<li className="leading-relaxed" {...props}>
								{children}
							</li>
						),
						blockquote: ({ node, children, ...props }) => (
							<blockquote
								className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground"
								{...props}
							>
								{children}
							</blockquote>
						),
						a: ({ node, children, ...props }) => (
							<a
								className="text-primary hover:underline font-medium"
								{...props}
							>
								{children}
							</a>
						),
						code: ({ node, className, children, ...props }) => {
							const match = /language-(\w+)/.exec(className || "");
							const isInline = !match;

							if (isInline) {
								return (
									<code
										className="bg-muted text-primary px-1.5 py-0.5 rounded text-sm font-mono"
										{...props}
									>
										{children}
									</code>
								);
							}

							return (
								<code className={className} {...props}>
									{children}
								</code>
							);
						},
						pre: ({ node, children, ...props }) => (
							<pre
								className="bg-card border border-border rounded-lg p-4 overflow-x-auto my-6 shadow-lg"
								{...props}
							>
								{children}
							</pre>
						),
					}}
				>
					{blogData.content}
				</ReactMarkdown>
			</div>
		</article>
	);
}
