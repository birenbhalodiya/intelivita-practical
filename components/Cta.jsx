import Image from "next/image";
import Heading from "./common/Heading";
import { Button } from "./common/Button";


export default function Cta() {
    return (
        <section className="container py-10 lg:py-16 md:py-14 sm:py-12 ">
            <div className="lg:p-20 md:p-16 sm:p-12 p-8 bg-primary md:rounded-[60px] rounded-[40px] relative overflow-hidden">
                <Image
                    src="/cta-bg-1.png"
                    alt="Background Image"
                    width={350}
                    height={350}
                    className="absolute bottom-0 left-0 object-contain md:w-[350px] sm:w-[250px] w-[150px] h-auto"
                />
                <Image
                    src="/cta-bg-2.png"
                    alt="Background Image"
                    width={350}
                    height={350}
                    className="absolute bottom-0 right-0 object-contain md:w-[350px] sm:w-[250px] w-[150px] h-auto"
                />
                <div className="max-w-[620px] mx-auto text-center">
                    <Heading
                        h2='Deliciousness to your inbox'
                        p='Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim'
                    />
                </div>
                <div className="lg:mt-16 md:mt-12 sm:mt-9 mt-7 max-w-[480px] mx-auto relative">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:h-20 h-14 sm:pl-8 pl-4 sm:pr-44 pr-32 text-base  rounded-[24px] focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <div className="absolute top-0 right-0 flex items-center h-full pr-2 sm:pr-3">
                        <Button href={'#'} variant="black">Subscribe</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}