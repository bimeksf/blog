export default function CardDetail() {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
        Next Notion Start Pack
      </h1>

      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {["Web dev", "Frontend", "React", "Next.js"].map((tag, i) => (
          <span
            key={i}
            className="bg-slate-700 text-white rounded-full px-3 py-1 text-xs font-semibold  tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-center text-gray-500 text-sm mb-1">Jan 20, 2021</p>
      <p className="text-center font-medium text-gray-700 mb-6">By Travis Fischer</p>

      <div className="max-w-3xl mx-auto text-justify text-gray-800 leading-relaxed space-y-6 text-base font-light">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          consectetur fuga! Itaque, quod molestiae doloribus ipsam dolor
          repudiandae, ex modi velit magnam culpa cum ratione voluptatem
          molestias, vitae saepe. Iusto.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          consectetur fuga! Itaque, quod molestiae doloribus ipsam dolor
          repudiandae, ex modi velit magnam culpa cum ratione voluptatem
          molestias, vitae saepe. Iusto.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          consectetur fuga! Itaque, quod molestiae doloribus ipsam dolor
          repudiandae, ex modi velit magnam culpa cum ratione voluptatem
          molestias, vitae saepe. Iusto.
        </p>
      </div>
    </>
  );
}
