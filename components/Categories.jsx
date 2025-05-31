import { categories } from "@/helper";
import Image from "next/image";
import { Button } from "./common/Button";

export default function Categories() {
    return (
        <section className="container py-10 lg:py-16 md:py-14 sm:py-12">
            <div>
                <div className="flex flex-col items-center justify-between gap-5 mb-6 sm:flex-row lg:mb-16 md:mb-12 sm:mb-10">
                    <h2>Categories</h2>
                    <Button href="/" variant="primary">View All Categories</Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 md:gap-6 sm:gap-4 gap-x-4 gap-y-0">
                    {categories.map((category, index) => (
                        <div key={index} className={`${category.className ? category.className : ""} bg-transparent cursor-pointer rounded-[30px] flex flex-col items-center gap-4 sm:gap-8 p-6 lg:mt-14 md:mt-12 mt-10`}>
                            <Image
                                src={category.img}
                                alt={category.name}
                                width={100}
                                height={100}
                                className="sm:w-[100px] w-[80px] h-fit object-cover lg:-mt-14 md:-mt-12 -mt-10"
                            />
                            <div className="">
                                <p className="text-lg font-semibold">{category.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}