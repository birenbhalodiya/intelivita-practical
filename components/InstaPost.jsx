import Image from "next/image";
import Heading from "./common/Heading";
import { instapost } from "@/helper";
import { Button } from "./common/Button";
import { Instagram } from "lucide-react";

export default function InstaPost() {
    return (
        <section className="py-10 lg:py-16 md:py-14 sm:py-12 gradient-blue">
            <div className="container">
                <div className="lg:mb-16 md:mb-12 sm:mb-9 mb-7">
                    <Heading
                        h2='Check out @foodieland on Instagram'
                        p='Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim '
                    />
                </div>
                <div className="grid grid-cols-1 gap-4 md:gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {instapost.map((ele, index) => (
                        <div key={index} className="overflow-hidden cursor-pointer">
                            <Image
                                src={ele.img}
                                alt="Advertisement"
                                width={368}
                                height={250}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
                <div className="mx-auto text-center lg:mt-16 md:mt-12 sm:mt-9 mt-7">
                    <Button href={'#'} variant="black" icon={<Instagram className="w-5 h-5"/>}>Visit Our Instagram</Button>
                </div>
            </div>
        </section>
    )
}