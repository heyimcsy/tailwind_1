import { cva } from "class-variance-authority";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const badgeVariants = cva(
  "rounded-full bg-black text-white px-2 py-1 text-xs font-medium ",
  {
    variants: {
      variant: {
        secondary: "bg-gray-200 text-black",
        destructive: "bg-red-500 text-white",
        outline: "bg-white text-black",
      },
    },
  },
);

type BadgeProps = {
  children: React.ReactNode;
  variant?: "secondary" | "destructive" | "outline";
  className?: string;
};

export default function Badge({ children, variant, className }: BadgeProps) {
  const badgeClasses = twMerge(clsx(badgeVariants({ variant, className })));
  return <span className={badgeClasses}>{children}</span>;
}
