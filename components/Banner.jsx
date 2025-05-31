import Image from "next/image";
import Heading from "./common/Heading";
import { Button } from "./common/Button";
import Carousel from "./common/Carousel";

const slides = [
    <div key="1" className="relative w-full h-auto md:rounded-[50px] rounded-[40px] overflow-hidden">
        <div className="grid md:grid-cols-2 gap-[5px]">
            <div className="flex flex-col justify-center h-full p-6 md:py-8 md:pl-16 md:pr-5 bg-primary">
                <div className="flex items-center gap-2 px-[18px] py-3 mb-6 bg-white rounded-full shadow-md w-fit">
                    <Image src="/hot-recipes.png" alt="Category Icon" width={20} height={20} />
                    <span className="text-sm font-semibold">Hot Recipes</span>
                </div>
                <h1 className="mb-4">Spicy delicious chicken wings</h1>
                <p className=" text-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className="flex items-center gap-3 mt-7 mb-2 text-[15px]">
                    <div className="flex items-center gap-[6px] bg-[#0000000D] px-4 py-[10px] rounded-full">
                        <Image src="/clock.png" alt="Clock Icon" width={20} height={20} />
                        <span className="text-[#00000099]">30 Minutes</span>
                    </div>
                    <div className="flex items-center gap-[6px] bg-[#0000000D] px-4 py-[10px] rounded-full">
                        <Image src="/forkknife.png" alt="Category Icon" width={20} height={20} />
                        <span className="text-[#00000099]">Chicken</span>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-3 md:mt-16 sm:mt-12 mt-7 sm:items-center sm:flex-row">
                    <div className="flex items-center gap-3">
                        <Image src="/john-smith.png" alt="Chef Icon" width={50} height={50} className="w-[50px] h-auto" />
                        <div>
                            <p className="mb-1 font-semibold">John Smith</p>
                            <p className="text-sm text-text">15 March 2022</p>
                        </div>
                    </div>
                    <div>
                        <Button href={'#'} variant="black" icon={<Image src="/playcircle.png" alt="Arrow Icon" width={24} height={24} className="w-[24px] h-auto" />}>View Recipes</Button>
                    </div>
                </div>
            </div>
            <div className="relative row-start-1 md:row-auto">
                <Image
                    src="/badge.png"
                    alt="badge"
                    width={140}
                    height={140}
                    className="absolute object-cover md:top-12 md:-left-6 top-5 left-5 md:w-[140px] md:h-[140px] w-[100px] h-[100px] rounded-full"
                />
                <Image
                    src="/baked-chicken.png"
                    alt="baked-chicken"
                    width={660}
                    height={640}
                    className="object-cover h-full"
                />
            </div>
        </div>
    </div>,
    <div key="2" className="relative w-full h-auto md:rounded-[50px] rounded-[40px] overflow-hidden">
        <div className="grid md:grid-cols-2 gap-[5px]">
            <div className="flex flex-col justify-center h-full p-6 md:py-8 md:pl-16 md:pr-5 bg-primary">
                <div className="flex items-center gap-2 px-[18px] py-3 mb-6 bg-white rounded-full shadow-md w-fit">
                    <Image src="/hot-recipes.png" alt="Category Icon" width={20} height={20} />
                    <span className="text-sm font-semibold">Hot Recipes</span>
                </div>
                <h1 className="mb-4">Spicy delicious chicken wings</h1>
                <p className=" text-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className="flex items-center gap-3 mt-7 mb-2 text-[15px]">
                    <div className="flex items-center gap-[6px] bg-[#0000000D] px-4 py-[10px] rounded-full">
                        <Image src="/clock.png" alt="Clock Icon" width={20} height={20} />
                        <span className="text-[#00000099]">30 Minutes</span>
                    </div>
                    <div className="flex items-center gap-[6px] bg-[#0000000D] px-4 py-[10px] rounded-full">
                        <Image src="/forkknife.png" alt="Category Icon" width={20} height={20} />
                        <span className="text-[#00000099]">Chicken</span>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-3 md:mt-16 sm:mt-12 mt-7 sm:items-center sm:flex-row">
                    <div className="flex items-center gap-3">
                        <Image src="/john-smith.png" alt="Chef Icon" width={50} height={50} className="w-[50px] h-auto" />
                        <div>
                            <p className="mb-1 font-semibold">John Smith</p>
                            <p className="text-sm text-text">15 March 2022</p>
                        </div>
                    </div>
                    <div>
                        <Button href={'#'} variant="black" icon={<Image src="/playcircle.png" alt="Arrow Icon" width={24} height={24} className="w-[24px] h-auto" />}>View Recipes</Button>
                    </div>
                </div>
            </div>
            <div className="relative row-start-1 md:row-auto">
                <Image
                    src="/badge.png"
                    alt="badge"
                    width={140}
                    height={140}
                    className="absolute object-cover md:top-12 md:-left-6 top-5 left-5 md:w-[140px] md:h-[140px] w-[100px] h-[100px] rounded-full"
                />
                <Image
                    src="/baked-chicken.png"
                    alt="baked-chicken"
                    width={660}
                    height={640}
                    className="object-cover h-full"
                />
            </div>
        </div>
    </div>,
    <div key="3" className="relative w-full h-auto md:rounded-[50px] rounded-[40px] overflow-hidden">
        <div className="grid md:grid-cols-2 gap-[5px]">
            <div className="flex flex-col justify-center h-full p-6 md:py-8 md:pl-16 md:pr-5 bg-primary">
                <div className="flex items-center gap-2 px-[18px] py-3 mb-6 bg-white rounded-full shadow-md w-fit">
                    <Image src="/hot-recipes.png" alt="Category Icon" width={20} height={20} />
                    <span className="text-sm font-semibold">Hot Recipes</span>
                </div>
                <h1 className="mb-4">Spicy delicious chicken wings</h1>
                <p className=" text-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className="flex items-center gap-3 mt-7 mb-2 text-[15px]">
                    <div className="flex items-center gap-[6px] bg-[#0000000D] px-4 py-[10px] rounded-full">
                        <Image src="/clock.png" alt="Clock Icon" width={20} height={20} />
                        <span className="text-[#00000099]">30 Minutes</span>
                    </div>
                    <div className="flex items-center gap-[6px] bg-[#0000000D] px-4 py-[10px] rounded-full">
                        <Image src="/forkknife.png" alt="Category Icon" width={20} height={20} />
                        <span className="text-[#00000099]">Chicken</span>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-3 md:mt-16 sm:mt-12 mt-7 sm:items-center sm:flex-row">
                    <div className="flex items-center gap-3">
                        <Image src="/john-smith.png" alt="Chef Icon" width={50} height={50} className="w-[50px] h-auto" />
                        <div>
                            <p className="mb-1 font-semibold">John Smith</p>
                            <p className="text-sm text-text">15 March 2022</p>
                        </div>
                    </div>
                    <div>
                        <Button href={'#'} variant="black" icon={<Image src="/playcircle.png" alt="Arrow Icon" width={24} height={24} className="w-[24px] h-auto" />}>View Recipes</Button>
                    </div>
                </div>
            </div>
            <div className="relative row-start-1 md:row-auto">
                <Image
                    src="/badge.png"
                    alt="badge"
                    width={140}
                    height={140}
                    className="absolute object-cover md:top-12 md:-left-6 top-5 left-5 md:w-[140px] md:h-[140px] w-[100px] h-[100px] rounded-full"
                />
                <Image
                    src="/baked-chicken.png"
                    alt="baked-chicken"
                    width={660}
                    height={640}
                    className="object-cover h-full"
                />
            </div>
        </div>
    </div>,
];
export default function Banner() {
    return (
        <section className="container py-10 lg:py-16 md:py-14 sm:py-12">
            <Carousel slides={slides} />
        </section>
    )
}