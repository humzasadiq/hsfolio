import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../data/blog_data";
import UnderConstruction from "../components/UnderConstruction";

export default function Blogs() {
    return (
        <div className="relative xl:w-[1200px] md:mx-auto min-h-screen border-x border-zinc-100 dark:border-zinc-800 bg-[#FBFAF8] dark:bg-zinc-950 overflow-hidden">
            <UnderConstruction/>
            
            <div className="flex flex-col items-center justify-center p-4 pt-20 text-black dark:text-zinc-100">
            <h1>Blog Posts</h1>
            {blogPosts.map((post) => (
                <div key={post.id } className="flex flex-col items-center justify-center p-4 pt-5">
                <h2>{post.title}</h2>
                <Link to={`/blogs/${post.slug}`}>Read More</Link>
                </div>
            ))}
            </div>
        </div>
    );
}