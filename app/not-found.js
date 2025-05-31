"use client"
// import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter()

    return (
        <div className="w-full h-screen pt-10 flex max-h-[800px] items-center justify-center">
            <title>404 This page could not be found.</title>
            <div className="flex flex-col items-center justify-center h-full gap-10">
                <div className="flex flex-col items-center gap-6">
                    <div className="text-4xl font-semibold">404, Page not founds</div>
                    <div className="font-normal text-[#475156] max-w-[520px] text-center">Something went wrong. It’s look that your requested could not be found. It’s look like the link is broken or the page is removed.</div>
                    <div className="flex gap-3">
                        {/* <Button size='lg' onClick={() => router.back()}>
                            <div className="flex items-center justify-center gap-3">
                                <MoveLeft />
                                <div>go back</div>
                            </div>
                        </Button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}