"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";

export default function StartPage({ onStart }: { onStart: () => void }) {
  return (
    <m.div className="text-center">
      <m.h1
        initial={{
          y: 20,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="mb-8 text-4xl font-bold"
      >
        MBTI 테스트
      </m.h1>
      <m.button
        initial={{
          y: 20,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={onStart}
        className="rounded-lg bg-blue-500 px-6 py-3 text-lg text-white"
      >
        시작하기
      </m.button>
      <AnimatePresence>{}</AnimatePresence>
    </m.div>
  );
}
