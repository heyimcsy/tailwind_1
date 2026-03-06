import { render, screen } from "@testing-library/react";
import Home from "./page";
test("에러를 내보자", () => {
  render(<Home />);

  const emailInput = screen.getByLabelText("이메일");
  expect(emailInput).toHaveTextContent("");
});
