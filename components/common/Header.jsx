"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { menus, socialMedia } from "@/helper";

export default function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        if (click) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [click]);

    return (
        <div className={`top-0 z-50 w-full border-b bg-white sticky ${scrolled ? ' ' : ''}`}>
            <div className='container z-20 flex items-center justify-between gap-5 py-6 m-auto sm:py-8'>
                <div className='cursor-pointer' onClick={() => router.push(`/`)}>
                    <Link href='/' as='/'>
                        <Image src={'/foodieland.png'} priority={true} alt="foodieland" width={110} height={30} />
                    </Link>
                </div>
                <div className={`${click ? "nav-options active" : "nav-options"} lg:flex items-center hidden nav-options xl:text-[18px] text-base font-normal xl:gap-10 lg:gap-5 gap-0`}>
                    {menus.map((menu, index) => (
                        <div key={index} onClick={() => setClick(false)}>
                            <Link
                                href={menu.url}
                                as={menu.url}
                                className='relative flex justify-between text-[15px] hover:!text-secondary'
                            >
                                {menu.name}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="items-center hidden gap-6 lg:flex">
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
                <div className="block cursor-pointer mobile_header_menu lg:hidden" onClick={handleClick}>
                    {click ? (
                        <X />
                    ) : (
                        <Menu />
                    )}
                </div>
            </div>
        </div>
    )
}