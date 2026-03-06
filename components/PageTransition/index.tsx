import * as m from "motion/react-m";
import React from "react";

type PageTransitionProps = {
  children: React.ReactNode;
};
export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <m.div
      className="h-fit w-fit"
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        ease: "easeInOut",
        duration: 2,
      }}
    >
      {children}
    </m.div>
  );
}
