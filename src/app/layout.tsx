import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "../components/sections/header";
import { Footer } from "../components/sections/footer";
import Contact from "../components/contact/contact";
import Menu from "../components/sections/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ahmed Hany",
    description: "I am a front end developer , I enjoy building web applications with modern technologies and challenging my self to learn new things. I enjoy spending time with my homie.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth scroll-p-8">
            <body className={`${inter.className} dark:bg-[#09090B] dark:text-white`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
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
