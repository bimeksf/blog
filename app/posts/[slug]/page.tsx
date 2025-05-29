import CardDetail from "@/components/CardDetail"

interface ParamsInterface {
    slug:  string

}

export default function postDetail({params}: { params: ParamsInterface }){

    return (
            <>
       <h1>Post Detail: {params.slug}</h1>
       <main>

        <section className="flex flex-col  min-h-screen">

       <CardDetail/>

        </section>
       </main>

            </>

    )
}