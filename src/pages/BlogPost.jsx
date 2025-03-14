import React from "react";
import { useParams } from "react-router-dom";
import blogPosts from "../data/blog_data";
import { IoCaretBackSharp } from "react-icons/io5";
import Markdown from "react-markdown";

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <h2>Post Not Found</h2>;
  }

return (
    <div className="xl:w-[1200px] md:mx-auto min-h-screen border-x border-zinc-100 dark:border-zinc-800 bg-[#FBFAF8] dark:bg-zinc-950">
            <div className="flex p-4 pt-20">
                <a href="/blogs" class="mr-2 inline-flex items-center text-sm font-medium  hover:text-violet-600 focus:outline-hidden focus:border-violet-600 focus:text-violet-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-violet-500 dark:hover:border-violet-500">
                        <IoCaretBackSharp className="font-bold text-3xl" />
                </a>    
                <h1 className="text-3xl font-bold text-black dark:text-zinc-100">
                        {post.title}
                </h1>
            </div>
            <div className="text-black dark:text-zinc-100 grid grid-cols-1 md:grid-cols-[1fr_50%_1fr] md:ml-10 p-4 w-full">
                    <p><b>Posted:</b> {post.posted}</p>
                    <div>
                    <Markdown children={post.content}/>
                    </div>
            </div>
    </div>
);
}

export default BlogPost;
