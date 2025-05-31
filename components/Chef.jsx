import Image from "next/image";
import Heading from "./common/Heading";
import { recipes } from "@/helper";
import { Button } from "./common/Button";

export default function Chef() {
    return (
        <section className="container py-10 lg:py-16 md:py-14 sm:py-12">
            <div className="flex flex-col-reverse items-center gap-6 md:gap-12 sm:gap-9 md:flex-row">
                <div className="md:w-2/5">
                    <h2 className="mb-4 sm:mb-6">Everyone can be a <br/> chef in their own kitchen</h2>
                    <p className="mb-6 md:mb-12 sm:mb-9 text-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    <Button href={'#'} variant="black">Learn More</Button>
                </div>
                <div className="md:w-3/5">
                    <Image
                        src="/chef.png"
                        alt="Chef Image"
                        width={710}
                        height={597}
                        className="object-cover w-full h-full rounded-[20px] mt-8" />
                </div>
            </div>
        </section>
    )
}