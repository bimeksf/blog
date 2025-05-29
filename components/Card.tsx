import Image from "next/image"

export default function Card() {

    return (
                <div className="bg-orange-200 p-4 w-1/3 rounded-md">
                        <Image src="" alt="" fill/>
                            <div>
                                <h1 className="text-2xl font-bold ">Next Notion start pack</h1>
                                <p className="text-sm font-light my-2 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, consectetur fuga! Itaque, quod molestiae doloribus ipsam dolor repudiandae, ex modi velit magnam culpa cum ratione voluptatem molestias, vitae saepe. Iusto.</p>
                                <p className="my-2 text-sm  text-slate-400">Jan 20, 2021</p>

                                <div>
                                    <span className="flex gap-2 text-sm">
                                        <div className="bg-slate-600 rounded-md p-1">Web dev</div>
                                        <div className="bg-slate-600 rounded-md p-1">Web dev</div>
                                        <div className="bg-slate-600 rounded-md p-1">Web dev</div>
                                        <div className="bg-slate-600 rounded-md p-1">Web dev</div>
                                    </span>

                                </div>
                            </div>

                </div>


    )

}