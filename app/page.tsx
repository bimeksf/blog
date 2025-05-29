import Card from "@/components/Card";
import Link from "next/link";
import { getAllPosts } from "@/data";
import { notFound } from "next/navigation";

export default function Home() {

const posts = getAllPosts()

  if (posts.length === 0) {
    return notFound();
  }

  return (
    <div className="bg-white text-gray-800">
      <main>
        {/* Hero section */}
        <section className="min-h-screen bg-slate-200 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Blog Page</h1>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Browse Posts
          </button>
        </section>

        {/* Blog Posts  */}
        <section className="bg-gray-100 min-h-screen py-12 px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Recent Posts</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {posts.map((post) => (
              
              <article className="flex justify-center" key={post.slug}>
                <Link href={`/posts/${post.slug}`}  >

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
      </main>
    </div>
  );
}
