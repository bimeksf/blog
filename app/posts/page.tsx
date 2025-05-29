import Card from "@/components/Card";
import { getAllPosts } from "@/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function AllPosts() {
  const posts = getAllPosts();

  if (posts.length === 0) {
    return notFound();
  }

  return (
    <>
      <h1 className="text-4xl font-bold m-4 text-center">All Posts</h1>
      <section>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <article
              className="flex justify-center"
              key={post.slug}
        
            >
              <Link href={`/posts/${post.slug}`}>
                <Card
                  title={post.title}
                  date={post.date}
                  tags={post.tags}
                  description={post.description}
                  image={post.image}
                />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
