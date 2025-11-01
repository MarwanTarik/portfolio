import type { Blog, BlogIndex } from "@/types/types";
import { useEffect, useState } from "react";
import blogIndexData from "@/data/blogs.json";

export function useBlog(blogId: string): { blog: Blog | undefined; isLoading: boolean; error: boolean } {
	const [blog, setBlog] = useState<Blog>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const blogIndex = blogIndexData as BlogIndex[];

	useEffect(() => {
		setIsLoading(true);
		setError(false);
		
		const blogData = blogIndex.find((b) => b.id === blogId);
		if (blogData) {
			fetch(blogData.file_url)
				.then((response) => {
					if (!response.ok) {
						throw new Error('Failed to fetch blog content');
					}
					return response.text();
				})
				.then((content) => {
					setBlog({
						id: blogData.id,
						title: blogData.title,
						description: blogData.description,
						date: blogData.date,
						thumbnail: blogData.thumbnail,
						content: content,
					});
					setIsLoading(false);
				})
				.catch((error) => {
					console.error("Error loading blog content:", error);
					setError(true);
					setIsLoading(false);
				});
		} else {
			setError(true);
			setIsLoading(false);
		}
	}, [blogId, blogIndex]);

	return { blog, isLoading, error };
}
