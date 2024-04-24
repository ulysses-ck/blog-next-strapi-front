"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React from "react";

export const revalidate = 10;

export default function ListPosts({ posts }) {
  return (
    <section className="flex flex-col items-start gap-4 px-20">
      {posts.map((post) => {
        return (
          <article key={post.id} className="border border-white w-full p-2">
            <h2 className="text-xl text-center underline">{post.attributes.title}</h2>
            <BlocksRenderer content={post.attributes.body} />
          </article>
        );
      })}
    </section>
  );
}
