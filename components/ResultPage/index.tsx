"use client";

import * as m from "motion/react-m";

export default function ResultPage({ answers }: { answers: string[] }) {
  return (
    <m.div className="text-center">
      <m.h2
        className="mb-6 text-3xl font-bold"
        initial={{
          opacity: 0,
          y: -30,
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
        테스트 결과
      </m.h2>
      <m.div className="rounded-lg bg-white p-6 shadow-lg">
        {answers.map((answer, index) => (
          <m.p
            key={index}
            className="mb-2"
            initial={{
              x: -30,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: index * 0.5,
            }}
          >
            질문 {index + 1}: {answer}
          </m.p>
        ))}
      </m.div>
    </m.div>
  );
}
