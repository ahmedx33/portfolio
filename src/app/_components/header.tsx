"use client";
import Logo from "@/components/logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const goPage = async (page: string, fn?: () => void) => {
    if (location.pathname !== `/${page}`) {
        const loadingContainer = document.querySelector(".loading-container") as HTMLDivElement;
        const loadingText = loadingContainer?.querySelector(".loading-text") as HTMLHeadingElement;
        loadingText.innerHTML = page === "" ? "hero" : page;
        const progressBar = document.querySelector("#loading-progress")?.querySelector("div");
        if (progressBar) progressBar.style.transform = "translateX(100%)";
        const tl = gsap.timeline();
        const swipeDuration = 0.5;

        tl.to(loadingContainer, {
            y: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            duration: swipeDuration,
        }).to(null, {
            duration: 0,
            onComplete: fn,
        });
    }
};

export function Header() {
    const router = useRouter();

    const goRoute = (text: string) => {
        goPage(text, () => router.push(`/${text}`));
    };

    return (
        <header id="hero" className="w-full md:h-[90px] h-[85px] py-[24px] md:px-[90px] px-[24px]  flex items-center justify-between border-b-2">
            <div className="flex gap-[0.7rem] mx-auto md:mx-0">
                <button onClick={() => goRoute("")}>
                    <Logo />
                </button>
                <ModeToggle />
            </div>
            <nav>
                <ul className="items-center gap-4 font-semibold md:flex hidden transition">
                    <li>
                        <button className="transition hover:dark:text-slate-200 hover:text-gray-600 dark:hover:text-slate-100 md:w-fit w-full md:h-fit h-24" onClick={() => goRoute("about")}>
                            About me
                        </button>
                    </li>
                    <li>
                        <button onClick={() => goRoute("projects")} className="transition hover:dark:text-slate-200 hover:text-gray-600 dark:hover:text-slate-100 md:w-fit w-full md:h-fit h-24">
                            Projects
                        </button>
                    </li>
                    <li>
                        <button className="transition hover:dark:text-slate-200 hover:text-gray-600 dark:hover:text-slate-100 md:w-fit w-full md:h-fit h-24" onClick={() => goRoute("contact")}>
                            Contact me
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
