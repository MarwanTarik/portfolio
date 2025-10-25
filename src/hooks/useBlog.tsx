import type { Blog, BlogIndex } from "@/types/types";
import { useEffect, useState } from "react";
import blogIndexData from '../../public/blogs/index.json';

export function useBlog(blogId: string): Blog | undefined {
    const [blog, setBlog] = useState<Blog>();
    const blogIndex = blogIndexData as BlogIndex[]

    useEffect(() => {
        const blogData = blogIndex.find(b => b.id === blogId);        
        if (blogData) {
            fetch(blogData.file_url)
                .then(response => response.text())
                .then(content => {
                    setBlog({
                        id: blogData.id,
                        title: blogData.title,
                        description: blogData.description,
                        date: blogData.date,
                        thumbnail: blogData.thumbnail,
                        content: content
                    });
                })
                .catch(error => {
                    console.error("Error loading blog content:", error);
                });
        }
    }, [blogId, blogIndex]);

    return blog;
}