"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Logo() {
    return (
        <div className="logo flex items-center font-bold gap-[0.250rem]">
            <Vim />
            Ahmed Hany
        </div>
    );
}

["stroke-white", "stroke-[#020617]"];

export function Vim({ width, height }: { width?: number; height?: number }) {
    const { theme } = useTheme();
    const isDark = theme === "dark" || theme === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches : false;
    return <Image src="/mme.png" alt="logo" width={60} height={60} />;
}
