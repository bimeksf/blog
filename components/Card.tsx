import Image from "next/image";



interface CardProps {
  title: string
  slug?: string
  date?: string
  author?: string
  description: string
  tags: string[]
  image:string
}




export default function Card({title, date, description , tags =[], image } : CardProps) {
  return (
    <div className="shadow-sm p-4 rounded-md w-[420px] h-[550px] hover:shadow-2xl hover:bg-slate-50 hover:opacity-90  hover:scale-105   transition-all duration-200 ease-in-out ">
      <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden">
        <Image
          src={image}
          alt="Mac and Cheese"
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm font-light my-2 text-slate-700">
       {description}
      </p>
      <p className="my-2 text-sm text-slate-500">       {date}
</p>

      <div className="flex flex-wrap gap-2 text-sm">
        {tags.map((tag, index) => (
          <div key={index} className="bg-slate-600 text-white rounded-md px-2 py-1">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
