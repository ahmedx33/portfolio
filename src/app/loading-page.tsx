"use client";
import { useEffect, useRef } from "react";
import { Vim } from "@/components/logo";
import { gsap } from "gsap";

type LoadingPageInterface = {
	loadings?: { name: string; status: boolean }[];
	section: string;
};

export default function LoadingPage({
	loadings,
	section,
}: LoadingPageInterface) {
	const totalTasks = loadings?.length ?? 0;
	const loadingContainer = useRef<HTMLDivElement>(null);
	const overallProgress =
		totalTasks > 0
			? ((loadings?.filter((loading) => loading.status) ?? []).length /
					totalTasks) *
			  100
			: 0;
	let rest = 100 - overallProgress;

	useEffect(() => {
		const runAnimations = async () => {
			if (loadingContainer.current) {
				scrollTo({ top: 0, behavior: "smooth" });
				gsap.to(`body :is(#${section}, header)`, {
					y: loadingContainer.current?.clientHeight - 650,
				});

				if (rest === 100) {
					await new Promise((resolve) =>
						setTimeout(resolve, 600),
					);
					const swipeDuration = 1;

					gsap.to(".loading-container", {
						borderBottomLeftRadius:
							loadingContainer.current.clientWidth / 2,
						borderBottomRightRadius:
							loadingContainer.current.clientHeight / 2,
						y:
							-window.innerHeight -
							loadingContainer.current.clientHeight,
						duration: swipeDuration,
						ease: "power2.inOut",
					});

					gsap.to("body :is(section, header)", {
						y: 0,
						duration: swipeDuration,
						ease: "power2.inOut",
					});
				}
			}
		};

		runAnimations();
	}, [rest, section]);

	return (
		<div
			ref={loadingContainer}
			className="loading-container top-0 border-2 w-full h-screen fixed bg-white z-50 dark:bg-[#09090B] flex flex-col items-center justify-center px-8 md:px-12 lg:px-24 3xl:px-[30rem]"
		>
			<h1 className="md:text-6xl text-3xl font-bold w-fit mx-auto md:mb-12 mb-6 transition md:text-start text-center">
				welcome to X3 <Vim width={90} height={90} />
			</h1>
			<h3 className="loading-text md:text-3xl text-3xl font-semibold w-fit mx-auto">
				{section}
			</h3>
		</div>
	);
}
