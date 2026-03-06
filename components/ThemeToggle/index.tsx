"use client";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex h-fit w-fit space-x-2">
      <button
        className="h-fit w-fit rounded-md border border-black px-2 py-1 dark:border-white"
        onClick={() => setTheme("system")}
      >
        시스템
      </button>
      <button
        className="h-fit w-fit rounded-md border border-black px-2 py-1 dark:border-white"
        onClick={() => setTheme("light")}
      >
        라이트
      </button>
      <button
        className="h-fit w-fit rounded-md border border-black px-2 py-1 dark:border-white"
        onClick={() => setTheme("dark")}
      >
        다크
      </button>
    </div>
  );
};

export default ThemeToggle;
