import "./caption.css"
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export default function Caption({className, children}: {children: string} & ComponentPropsWithoutRef<"h1">) {
    return <h1 className={cn("text-6xl font-bold w-fit", className)}>{children.split("").map((c, i) => <span key={i} className={`caption-char ${c === " " ? "w-2.5" : ""}`}>{c}</span>)}</h1>
}
