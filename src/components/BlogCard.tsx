import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { useNavigate } from "@tanstack/react-router";

export type BlogCardProp = {
	id: string;
	description: string;
	title: string;
	date: string;
	thumbnail?: string;

};

export function BlogCard({ id, description, title, date, thumbnail }: BlogCardProp) {
	const navigate = useNavigate();

	return (
		<Card 
			className="blog-post bg-secondary/50 group w-full max-w-sm overflow-hidden transition-all duration-300 
			hover:shadow-xl hover:-translate-y-1 border border-border/50 hover:border-primary/50 p-0" 
			key={id}
		>
			<CardHeader className="p-0">
				<div className="relative overflow-hidden bg-muted">
					{thumbnail ? (
						<img 
							src={thumbnail} 
							alt={title}
							className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					) : (
						<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10
						 to-secondary/10">
							<span className="text-3xl opacity-20">📝</span>
						</div>
					)}
					<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 
					group-hover:opacity-100 transition-opacity duration-300" />
				</div>
			</CardHeader>
			
			<CardContent className="p-4 space-y-2">
				<div className="flex items-center gap-2 text-xs text-muted-foreground">
					<Calendar className="w-3 h-3" />
					<time dateTime={date}>{date}</time>
				</div>
				
				<h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors duration-200">
					{title}
				</h3>
				
				<p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
					{description}
				</p>
			</CardContent>

			<CardFooter className="px-4 pb-4 pt-0">
				<button 
					type="button"
					className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 
					transition-all duration-200 group/btn"
					onClick={() => 
						navigate({
							to: '/blogs/$blogId',
							params: { blogId: id }
						})
					}
				>
					<span> Read more </span>
					<ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
				</button>
			</CardFooter>
		</Card>
	);
}
