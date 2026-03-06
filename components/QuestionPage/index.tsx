"use client";

import * as m from "motion/react-m";

interface QuestionPageProps {
  question: {
    question: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
}

export default function QuestionPage({
  question,
  onAnswer,
}: QuestionPageProps) {
  return (
    <div className="w-full max-w-2xl px-4">
      <m.h2
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
        }}
        className="mb-8 text-center text-2xl font-bold"
      >
        {question.question}
      </m.h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <m.button
            initial={{ y: 20 }}
            animate={{
              y: 0,
              transition: {
                duration: 0.3,
                delay: index * 0.2,
              },
            }}
            // transition={{
            //   duration: 1,
            //   delay: index * 0.2,
            // }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
            }}
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full rounded-lg bg-white p-4 text-left shadow"
          >
            {option}
          </m.button>
        ))}
      </div>
    </div>
  );
}
