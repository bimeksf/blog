import CardDetail from "@/components/CardDetail"
import { notFound } from "next/navigation"
import { getPostBySlug  } from "@/data";

interface ParamsInterface {
  slug: string
}

export default async function PostDetail({ params }: { params: ParamsInterface }) {
  const { slug } = params

  const post = await getPostBySlug(slug)

  if (!post) {
    return notFound()
  }

  return (
    <>
      <main>
        <section className="flex flex-col min-h-screen px-4 py-8">
          <CardDetail
            title={post.title}
            date={post.date}
            tags={post.tags}
            author={post.author}
            description={post.description}
          />
        </section>
      </main>
    </>
  )
}
