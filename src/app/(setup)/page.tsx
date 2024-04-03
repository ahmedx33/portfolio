"use client";

import Stats from "./_components/stats/stats";
import SocialLinks from "@/components/social-links";
import LoadingPage from "./loading-page";
import { useEffect, useState } from "react";
import axios from "axios";
import { useStats } from "@/store";
import HoverBall from "@/components/hover-ball";

export default function Hero() {
    const { setStats, isLoading: isStatsLoading } = useStats((store) => store);
    const [isMount, setIsMount] = useState<boolean>(false);
    useEffect(() => {
        setIsMount(true);

        if (isMount) {
            (async () => {
                if (isStatsLoading === false) return;
                const { data: github } = await axios.get("https://api.github.com/users/ahmedx33");

                setStats({ github: github.public_repos });
            })();
        }
        return () => {
            setIsMount(false);
        };
    }, [setStats, isStatsLoading, isMount]);

    return (
        <div>
            <LoadingPage section="hero" loadings={[{ name: "stats", status: isStatsLoading }]} />
            <section id="hero" className="w-full md:h-screen h-screen flex items-center">
                <div className="container h-full mx-auto flex items-start gap-12 pt-32 md:pt-34">
                    <div className="text flex items-start flex-col lg:w-2/3 w-full">
                        <h1 className="title leading-tight lg:text-6xl lg:mx-0 mx-auto w-fit lg:text-start text-center text-4xl mb-6 dark:text-gray-200">
                            Hi, I&apos;m <span className="font-bold">Ahmed Hany.</span>
                            <br />
                            <strong>Frontend</strong> Developer,
                            <br />
                            based in <strong>Egypt</strong>.
                        </h1>
                        <p className="w-[80%] lg:mx-0 lg:text-start  mx-auto text-center text-gray-500  dark:text-slate-400">
                            I am a front end developer , I enjoy building web applications with modern technologies and challenging my self to learn new things. I enjoy spending time with my family and friends.
                        </p>
                        <Stats />
                        <div className="lg:w-fit w-full flex justify-center mt-6">
                            <SocialLinks />
                        </div>
                    </div>
                    <div className="img-container w-1/2 h-[50%] justify-center items-start lg:flex hidden">
                        <HoverBall />
                    </div>
                </div>
            </section>
        </div>
    );
}
