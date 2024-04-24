import ListPosts from "@/components/ListPosts";
import { GetPosts } from "@/graphql/queries/posts";
import { getClient } from "@/lib/ApolloClient";

export default async function Home() {
  const { data } = await getClient().query({ query: GetPosts });
  return (
    <main className="flex flex-col">
      <h1 className="text-2xl text-center">Blog Next.js Strapi</h1>
      {data && <ListPosts posts={data.posts.data} />}
    </main>
  );
}
