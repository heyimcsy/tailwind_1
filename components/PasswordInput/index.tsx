// src/components/PassowordInput/index.tsx

"use client";

import { useState } from "react";

export const PasswordInput = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <input
        type={show ? "text" : "password"}
        placeholder="비밀번호를 입력하세요."
      />
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "숨기기" : "보기"}
      </button>
    </div>
  );
};
