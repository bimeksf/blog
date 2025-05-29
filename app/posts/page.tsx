import Card from "@/components/Card"

export default function allPosts(){
    return (

        <>
        <h1 className="text-4xl font-bold m-4 text-center">All Posts</h1>
        <section>

  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            
            {[...Array(10)].map((_,i)=>(
                
                <article key={i} className="flex justify-center">
                        <Card/>
    
    
                    </article>


))}

</div>
</section>
        
        
        </>


    )
}