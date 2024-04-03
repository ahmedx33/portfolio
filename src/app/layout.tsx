import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import Contact from "./_contact/contact";
import Menu from "./_components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "X3",
	description:
		"Front-end developer, made over 45 project, worked in 2 companies, 2 years of experience, learning networking, I use Neo:vim~1: & tmux for coding, available to hire",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth scroll-p-8">
			<body
				className={`${inter.className} dark:bg-[#09090B] dark:text-white`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<>
						<Header />
						<div className="flex flex-col min-h-[78vh] justify-between">
							{children}
							<Contact />
						</div>
						<Footer />
						<Menu />
					</>
				</ThemeProvider>
				<SpeedInsights />
			</body>
		</html>
	);
}
