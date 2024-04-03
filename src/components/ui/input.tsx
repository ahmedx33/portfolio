"use client"
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { validations?: { success: boolean, message: string }[] }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, validations, ...props }, ref) => {
        const [show, setShow] = React.useState(false)
        return (
            <>
                <input
                    type={type}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    onBlur={() => setShow(validations?.some(validation => !validation.success) ?? false)}
                    onInput={() => setShow(c => c ? validations?.some(validation => !validation.success) ?? false : c)}
                    ref={ref}
                    {...props}
                />
                <ul className={`${show ? "my-2" : "my-0"} transition-all duration-300 overflow-hidden flex flex-col gap-2.5 w-full pl-2`} style={{ height: show ? (validations?.length ?? 0) * 30 : 0 }}>
                    {validations?.map(validation => <li className="flex gap-2.5 items-center" key={validation.message}>
                        <div className={`w-3 h-3 rounded-half ${validation.success ? 'bg-green-500 shadow-green-neon' : 'bg-red-500 shadow-red-neon'}`} />
                        <p className={`text-md font-semibold ${validation.success ? 'text-green-500' : 'text-red-500'}`}>{validation.message}</p>
                    </li>
                    )}
                </ul>
            </>
        )
    }
)
Input.displayName = "Input"

export { Input }
