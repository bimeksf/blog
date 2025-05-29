import Card from "@/components/Card";

export default function Home() {
  return (
    <div className=''>

      <main>
        <section className="min-h-screen bg-slate-200 w-full">

      <h1 className="m-auto">Welocome to Blog page</h1>
      <button>Browse Posts</button>

        </section>

            <section className="bg-gray-400 min-h-screen">
                  <h1>All posts</h1>
                  <div className="grid justify-center gab-2 grid-cols-1 sm:grid-cols-2">
                        <article>
                     <Card/>

                        </article>
                        <article>
                     <Card/>

                        </article>
                        <article>
                     <Card/>

                        </article>
                        <article>
                     <Card/>

                        </article>



                  </div>

                  

            </section>


      </main>

     
    </div>
  );
}
