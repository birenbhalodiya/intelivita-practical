import { deliciousrecipe } from "@/helper";
import Image from "next/image";

export default function DeliciousRecipe() {
    return (
        <section className="container py-10 lg:py-16 md:py-14 sm:py-12">
            <div>
                <div className="flex flex-col items-center justify-between gap-5 mb-7 sm:flex-row lg:mb-16 md:mb-12 sm:mb-9">
                    <h2 className="sm:max-w-[485px]">Try this delicious recipe to make your day</h2>
                    <p className="text-text  max-w-[620px]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {deliciousrecipe.map((ele, index) => (
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