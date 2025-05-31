import { deliciousrecipe } from "@/helper";
import Image from "next/image";
import Heading from "../common/Heading";

export default function ContactDeliciousRecipe() {
    return (
        <section className="container py-10 lg:py-16 md:py-14 sm:py-12">
            <div>
                <div className="lg:mb-12 md:mb-12 sm:mb-9 mb-7">
                    <Heading
                        h2='Check out the delicious recipe'
                    />
                </div>
                <div className="grid grid-cols-1 gap-4 md:gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {deliciousrecipe.slice(0, 4).map((ele, index) => (
                        <div key={index} className={`rounded-[30px] flex flex-col items-center gap-3 sm:gap-6 relative`}>
                            <Image
                                src={ele.img}
                                alt={ele.title}
                                width={290}
                                height={180}
                                className="object-cover w-full h-auto aspect-[16/9] rounded-[20px]"
                            />
                            <Image
                                src={'/heart.png'}
                                alt={'heart icon'}
                                width={48}
                                height={48}
                                className="absolute object-contain w-[40px] h-auto aspect-square right-2 top-2"
                            />
                            <div className="w-full">
                                <h5 className="font-semibold">{ele.title}</h5>
                                <div className="flex items-center gap-5 mt-4 mb-2 text-[15px]">
                                    <div className="flex items-center gap-[6px]">
                                        <Image src="/clock.png" alt="Clock Icon" width={16} height={16} />
                                        <span>{ele.time}</span>
                                    </div>
                                    <div className="flex items-center gap-[6px]">
                                        <Image src="/forkknife.png" alt="Category Icon" width={16} height={16} />
                                        <span>{ele.category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}