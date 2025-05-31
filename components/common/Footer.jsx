import Link from "next/link"
import Image from "next/image"
import { socialMedia } from "@/helper"

export default function Footer() {
    return (
        <footer className="pt-10 pb-8 lg:pt-16 md:pt-14 sm:pt-12">
            <div className="container">
                <div className="flex flex-col gap-6 mb-12 md:flex-row md:justify-between md:items-center">
                    <div className="flex-1 max-w-md">
                        <Link href='/' as='/' className="block mb-5">
                            <Image src={'/foodieland.png'} priority={true} alt="foodieland" width={110} height={30} />
                        </Link>
                        <p className="text-sm leading-relaxed text-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <nav className="flex flex-wrap gap-6 md:gap-8">
                        <Link href="/" className="hover:!text-secondary text-sm font-medium transition-colors">
                            Recipes
                        </Link>
                        <Link href="/" className="hover:!text-secondary text-sm font-medium transition-colors">
                            Blog
                        </Link>
                        <Link href="/contact" className="hover:!text-secondary text-sm font-medium transition-colors">
                            Contact
                        </Link>
                        <Link href="/" className="hover:!text-secondary text-sm font-medium transition-colors">
                            About Us
                        </Link>
                    </nav>
                </div>

                <div className="relative flex flex-col gap-4 pt-8 border-t border-gray-200 sm:flex-row sm:justify-center sm:items-center">
                    <p className="text-sm text-text">
                        © 2020 Flowbase. Powered by{" "}
                        <Link href="#" className="!text-secondary hover:underline">
                            Webflow
                        </Link>
                    </p>

                    <div className="right-0 flex items-center gap-6 sm:absolute">
                        {socialMedia.map((social, index) => (
                            <Link key={index} href={social.url} passHref>
                                <div className="relative h-4 cursor-pointer hover:opacity-80">
                                    <Image
                                        src={social.img}
                                        alt={social.img.split('.')[0]}
                                        width={0}
                                        height={16}
                                        className="object-contain w-auto h-full"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}