import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    suffix?: React.ReactNode
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ suffix, className, type, ...props }, ref) => {
    return (
      <div className="gap-2 items-center flex">
        <input
          type={type}
          className={cn(
            "w-[380px] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent ring-cyan-400 shadow-lg ring-1 text-2xl p-3 m-3 font-sans ",
            className
          )}
          ref={ref}
          {...props}
        />
        {suffix}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
