"use client";
import React from "react";
import { motion } from "motion/react";
function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

type Variant =
  | "default"
  | "default-sm"
  | "outline"
  | "ghost"
  | "link"
  | "secondary";

export type ButtonProps = Omit<
  React.ComponentProps<typeof motion.button>,
  "ref"
> & {
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  default:
    "text-white rounded-[10px] px-7.5 py-2.5 inline-flex items-center justify-center text-white cursor-pointer text-lg font-medium bg-yellow-darkest hover:bg-yellow-dark transition-colors duration-300 ease-in-out",
  "default-sm":
    "text-yellow-lighter rounded-[10px] px-3.5 py-1.5 inline-flex items-center justify-center text-white cursor-pointer text-base font-medium bg-yellow-darkest hover:bg-yellow-dark transition-colors duration-300 ease-in-out",
  secondary:
    "text-white rounded-md px-4 py-2 inline-flex items-center justify-center",
  outline:
    "bg-transparent border-[1.25px] border-current cursor-pointer font-medium font-outline text-yellow-darkest rounded-[12.5px] px-4 py-2 inline-flex items-center justify-center",
  ghost:
    "bg-transparent rounded-md px-4 py-2 inline-flex items-center justify-center",
  link: "bg-transparent underline px-0 py-0 text-inherit",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const base = variantClasses[variant];
    return (
      <motion.button
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        ref={ref}
        className={cn(base, className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
