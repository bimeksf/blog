import Image from "next/image";

export default function Card() {
  return (
    <div className="shadow-sm p-4 rounded-md max-w-md hover:shadow-2xl hover:bg-slate-50 hover:opacity-90  hover:scale-105   transition-all duration-200 ease-in-out ">
      <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden">
        <Image
          src="/macncheese.jpg"
          alt="Mac and Cheese"
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-2xl font-bold">Next Notion Start Pack</h1>
      <p className="text-sm font-light my-2 text-slate-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        consectetur fuga! Itaque, quod molestiae doloribus ipsam dolor
        repudiandae, ex modi velit magnam culpa cum ratione voluptatem
        molestias, vitae saepe. Iusto.
      </p>
      <p className="my-2 text-sm text-slate-500">Jan 20, 2021</p>

      <div className="flex flex-wrap gap-2 text-sm">
        {["Web dev", "Frontend", "React", "Next.js"].map((tag, i) => (
          <div key={i} className="bg-slate-600 text-white rounded-md px-2 py-1">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
