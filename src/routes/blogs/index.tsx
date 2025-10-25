import { BlogCard } from "@/components/BlogCard";
import { getBlogList } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/")({
	component: Blogs,
});

function Blogs() {
	const blogs = getBlogList();

	return (
		<div className="flex flex-col gap-6 w-full justify-center items-center mx-auto max-w-7xl px-8 py-16">
			<div className="w-full h-fit p-8 rounded-2xl bg-gradient-to-r from-secondary to-secondary/80 shadow-lg">
				<p className="font-extrabold font-mono text-4xl text-secondary-foreground text-center tracking-tight">
					Blogs
				</p>
				<p className="text-center text-muted-foreground mt-2 text-sm">
					Explore my latest thoughts and technical writings
				</p>
			</div>

			<div className="w-full flex gap-6 flex-wrap">
				{blogs.map((blog) => (
					<BlogCard
						key={blog.id}
						id={blog.id}
						description={blog.description}
						title={blog.title}
						date={blog.date}
						thumbnail={blog.thumbnail}
					/>
				))}
			</div>

			{blogs.length === 0 && (
				<div className="text-center py-12 text-muted-foreground">
					<p className="text-xl mb-2">No blog posts yet</p>
					<p className="text-sm">Check back soon for updates!</p>
				</div>
			)}
		</div>
	);
}
