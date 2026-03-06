// // src/components/SignupForm.test.tsx

// import { fireEvent, render, screen } from "@testing-library/react";
// import { SignupForm } from ".";

// test("회원가입 버튼을 클릭하면 콘솔로그가 출력되는지 확인", () => {
//   render(<SignupForm />);

//   const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

//   // 이메일 입력 필드 확인
//   const emailInput = screen.getByLabelText("이메일");
//   fireEvent.change(emailInput, { target: { value: "test@example.com" } });

//   // 비밀번호 입력 필드 확인
//   const passwordInput = screen.getByLabelText("비밀번호");
//   fireEvent.change(passwordInput, { target: { value: "password123" } });

//   // 확인 비밀번호 입력 필드 확인
//   const confirmPasswordInput = screen.getByLabelText("비밀번호 확인");
//   fireEvent.change(confirmPasswordInput, { target: { value: "password123" } });

//   // 제출 이벤트 발생
//   const signupForm = screen.getByRole("form");
//   fireEvent.submit(signupForm);

//   // 콘솔 로그 확인
//   expect(alertSpy).toHaveBeenCalledWith("test@example.com님 반갑습니다.");

//   // jest.spyOn()으로 생성된 스파이(spy)를 원래 구현(original implementation)으로 완전히 복원하는 역할
//   alertSpy.mockRestore();
// });

// src/components/SignupForm.test.tsx

import { render, screen } from "@testing-library/react";
import { SignupForm } from ".";
import userEvent from "@testing-library/user-event";

test("이메일, 비밀번호, 확인 비밀번호 입력 후 제출 이벤트 테스트", async () => {
  const user = userEvent.setup();
  render(<SignupForm />);

  const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

  // 이메일 입력 필드 확인
  const emailInput = screen.getByLabelText("이메일");
  // await user.type(emailInput, "test@example.com");
  emailInput.focus(); // 클릭해도 focus는 안됨
  // 이메일 필드에 포커스되어 있는지 확인
  expect(emailInput).toHaveFocus(); // 에러 발생
  await user.type(emailInput, "test@example.com");

  // 비밀번호 입력 필드 확인
  const passwordInput = screen.getByLabelText("비밀번호");
  await user.type(passwordInput, "password123");

  // 확인 비밀번호 입력 필드 확인
  const confirmPasswordInput = screen.getByLabelText("비밀번호 확인");
  await user.type(confirmPasswordInput, "password123");

  // 제출 이벤트 발생
  const signupButton = screen.getByRole("button", { name: "회원가입" });
  await user.click(signupButton);

  // 콘솔 로그 확인
  expect(alertSpy).toHaveBeenCalledWith("test@example.com님 반갑습니다.");

  // jest.spyOn()으로 생성된 스파이(spy)를 원래 구현(original implementation)으로 완전히 복원하는 역할
  alertSpy.mockRestore();
});
