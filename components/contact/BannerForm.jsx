import { deliciousrecipe } from "@/helper";
import Image from "next/image";
import Heading from "../common/Heading";
import { Button } from "../common/Button";

export default function BannerForm() {
    return (
        <section className="container py-10 lg:py-16 md:py-14 sm:py-12">
            <div>
                <div className="text-center lg:mb-12 md:mb-12 sm:mb-9 mb-7">
                    <h1>Contact us</h1>
                </div>
                <div className="grid grid-cols-1 gap-8 md:gap-12 sm:gap-10 lg:grid-cols-3">
                    <div>
                        <Image
                            src="/contact-banner.png"
                            alt="Contact Banner Image"
                            width={400}
                            height={472}
                            className="object-cover w-full h-auto"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <form className="grid gap-5 form-row sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8">
                            <div className="form-group">
                                <label className="block mb-2 text-sm text-text" htmlFor="name">NAME</label>
                                <input className="w-full p-4 text-sm border sm:px-6 sm:py-5 rounded-2xl" type="text" id="name" placeholder="Enter your name..." />
                            </div>
                            <div className="form-group">
                                <label className="block mb-2 text-sm text-text" htmlFor="email">EMAIL ADDRESS</label>
                                <input className="w-full p-4 text-sm border sm:px-6 sm:py-5 rounded-2xl" type="email" id="email" placeholder="Your email address..." />
                            </div>
                            <div className="form-group">
                                <label className="block mb-2 text-sm text-text" htmlFor="subject">SUBJECT</label>
                                <input className="w-full p-4 text-sm border sm:px-6 sm:py-5 rounded-2xl" type="text" id="subject" placeholder="Enter subject..." />
                            </div>
                            <div className="form-group">
                                <label className="block mb-2 text-sm text-text" htmlFor="enquiry-type">ENQUIRY TYPE</label>
                                <select id="enquiry-type" className="w-full p-4 text-sm border sm:px-6 sm:py-5 rounded-2xl">
                                    <option value="advertising">Advertising</option>
                                    <option value="support">Support</option>
                                    <option value="general">General Inquiry</option>
                                </select>
                            </div>
                            <div className="form-group sm:col-span-2">
                                <label className="block mb-2 text-sm text-text" htmlFor="message">MESSAGES</label>
                                <textarea id="message" rows="6" className="w-full p-4 text-sm border sm:px-6 sm:py-5 rounded-2xl" placeholder="Enter your messages..."></textarea>
                            </div>
                            <div className="sm:col-span-2">
                                <Button href={'#'} variant="black">Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}