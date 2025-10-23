import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

export type BlogProp = {
	content: string;
	title: string;
	date: string;
	thumbnail?: string;
};

export function Blog({ content, title, date, thumbnail }: BlogProp) {
	return (
		<article className="max-w-4xl mx-auto px-6 py-12 font-sans">
			<header className="mb-12 space-y-6">
				{thumbnail && (
					<div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
						<img
							src={thumbnail}
							alt={title}
							className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
						/>
					</div>
				)}

				<h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mt-8">
					{title}
				</h1>

				<div className="flex items-center gap-4 text-muted-foreground text-sm">
					<time dateTime={date} className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<title>Calendar icon</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						{new Date(date).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</time>
					<span className="text-primary">•</span>
					<span className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<title>Reading time icon</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						{Math.ceil(content.split(" ").length / 200)} min read
					</span>
				</div>

				<div className="h-1 w-20 bg-primary rounded-full" />
			</header>

			<div
				className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:font-bold prose-headings:text-foreground
                prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
                prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-10
                prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
                prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-6
                prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                prose-strong:text-foreground prose-strong:font-bold
                prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-secondary prose-pre:border prose-pre:border-primary/20 prose-pre:rounded-xl prose-pre:shadow-lg
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-secondary/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic
                prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-6
                prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-6
                prose-li:text-foreground/90 prose-li:mb-2
                prose-img:rounded-xl prose-img:shadow-xl prose-img:my-8
                prose-hr:border-primary/30 prose-hr:my-12
                prose-table:border-collapse prose-table:w-full prose-table:my-8
                prose-th:bg-secondary prose-th:border prose-th:border-primary/20 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-bold
                prose-td:border prose-td:border-primary/20 prose-td:px-4 prose-td:py-3
            "
			>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw, rehypeHighlight]}
				>
					{content}
				</ReactMarkdown>
			</div>

			<footer className="mt-16 pt-8 border-t border-primary/20">
				<div className="flex items-center justify-between flex-wrap gap-4">
					<button
						type="button"
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-2"
					>
						Back to top
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<title>Arrow up</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 10l7-7m0 0l7 7m-7-7v18"
							/>
						</svg>
					</button>
				</div>
			</footer>
		</article>
	);
}
