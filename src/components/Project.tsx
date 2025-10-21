import { Button } from "./ui/button"
import { Card} from "./ui/card"
import { Github, ExternalLink } from "lucide-react"

export type projectProps = {
    title: string,
    jobTitle: string
    description: string,
    tags: string[],
    live: string,
    github: string
}

export function Project({ title, description, tags, live, github}: projectProps) {
    return (
        <Card
            className="p-8 w-lg h-lg bg-gradient-card border-border 
            hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-scale-in"
        >
            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-muted-foreground mb-4">{description}</p>
                
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                        {tag}
                    </span>
                    ))}
                </div>
            </div>

            <div className="flex gap-3">
                <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    asChild
                >
                    <a href={github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                    </a>
                </Button>
                
                <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    asChild
                >
                    <a href={live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                    </a>
                </Button>
            </div>
        </Card>
    )
}