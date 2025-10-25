export type BlogIndex = {
    id: string;
    description: string;
    title: string;
    date: string;
    thumbnail?: string;
    file_url: string;
};

export type Blog = {
    id: string;
    description: string;
    title: string;
    date: string;
    thumbnail?: string;
    content: string;
}