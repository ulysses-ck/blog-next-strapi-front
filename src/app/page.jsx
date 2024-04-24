import ListPosts from "@/components/ListPosts";

export const revalidate = 10;

export default async function Home() {
  const result = await fetch(`${process.env.STRAPI_BACKEND_URL}/api/posts`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN_SECRET}`,
    },
    cache: "no-cache"
  });

  const data = await result.json();


  return (
    <main className="flex flex-col">
      <h1 className="text-2xl text-center">Blog Next.js Strapi</h1>
      {result && <ListPosts posts={data.data} />}
    </main>
  );
}
