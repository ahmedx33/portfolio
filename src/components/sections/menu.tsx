"use client";
import { Button } from "@/components/ui/button";
import { Home, Luggage, PhoneCall, Sparkle } from "lucide-react";
import { goPage } from "./header";
import { useRouter } from "next/navigation";

export default function Menu() {
    const router = useRouter();

    const goRoute = (text: string) => {
        goPage(text, () => router.push(`/${text}`));
    };

    return (
        <div className="w-full fixed left-0 bottom-10 md:hidden flex justify-center h-fit z-40">
            <ul className="flex gap-2 py-2 z-40">
                <li className="z-40">
                    <Button className="z-40" size="icon" onClick={() => goRoute("")}>
                        <Home />
                    </Button>
                </li>
                <li className="z-40">
                    <Button className="z-40" size="icon" onClick={() => goRoute("about")}>
                        <Sparkle />
                    </Button>
                </li>
                <li className="z-40">
                    <Button className="z-40" size="icon" onClick={() => goRoute("projects")}>
                        <Luggage />
                    </Button>
                </li>
                <li className="z-40">
                    <Button className="z-40" size="icon" onClick={() => goRoute("contact")}>
                        <PhoneCall />
                    </Button>
                </li>
            </ul>
        </div>
    );
}
