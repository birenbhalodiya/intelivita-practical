import Image from "next/image";
import Heading from "./common/Heading";
import { recipes } from "@/helper";

export default function Recipes() {
    return (
        <section className="container py-10 lg:py-16 md:py-14 sm:py-12">
            <div>
                <div className="lg:mb-16 md:mb-12 sm:mb-9 mb-7">
                    <Heading
                        h2='Simple and tasty recipes'
                        p='Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim'
                    />
                </div>
                <div className="grid grid-cols-1 gap-4 md:gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {recipes.map((ele, index) => (
                        ele.ads ? (
                            <div key={index} className="overflow-hidden cursor-pointer">
                                <Image
                                    src={ele.ads}
                                    alt="Advertisement"
                                    width={385}
                                    height={421}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ) : (
                            <div key={index} className={`gradient-blue cursor-pointer rounded-[30px] flex flex-col items-center relative gap-4 sm:gap-6 p-4`}>
                                <Image
                                    src={ele.img}
                                    alt={ele.title}
                                    width={368}
                                    height={250}
                                    className="object-cover w-full h-auto rounded-[20px] aspect-[3/2]"
                                />
                                <Image
                                    src={'/heart.png'}
                                    alt={'heart icon'}
                                    width={48}
                                    height={48}
                                    className="absolute object-contain w-[44px] h-auto aspect-square right-7 top-7"
                                />
                                <div className="w-full px-2">
                                    <h4 className="font-semibold">{ele.title}</h4>
                                    <div className="flex items-center gap-5 sm:mt-5 mt-3 sm:mb-3 mb-1 text-[15px]">
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
                        )
                    ))}
                </div>
            </div>
        </section>
    )
}