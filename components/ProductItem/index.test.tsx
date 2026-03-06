import { render, screen } from "@testing-library/react";
import ProductItem from ".";

test("로그인 폼이 올바르게 렌더링 되는지 확인", () => {
  render(
    <ProductItem title="최서윤" description="낭랑 18세" isSoldOut={false} />,
  );

  // 라벨로 입력(input) 요소 찾기
  const titleByLabel = screen.getByText("최서윤");
  const desByLabel = screen.getByText("낭랑 18세");

  //   const checByRole = screen.getByLabelText("성별:");

  // 역할로 버튼 찾기
  const plusButton = screen.getByRole("button", { name: "+" });
  const minusButton = screen.getByRole("button", { name: "-" });
  const numberText = screen.getByText(1);

  // 테스트 ID로 요소 찾기
  //   const emailByTestId = screen.getByTestId("email-input");

  // 모든 요소가 화면에 있는지 확인
  expect(titleByLabel).toHaveTextContent("최서윤");
  expect(desByLabel).toHaveTextContent("낭랑 18세");
  expect(plusButton).toBeInTheDocument();
  expect(minusButton).toBeInTheDocument();
  expect(numberText).toBeInTheDocument();
  //   expect(emailByTestId).toBeInTheDocument();
});

test("로그인 폼이 올바르게 렌더링 되는지 확인", () => {
  render(
    <ProductItem title="최서윤" description="낭랑 18세" isSoldOut={true} />,
  );

  // 라벨로 입력(input) 요소 찾기
  const titleByLabel = screen.getByText("최서윤");
  const desByLabel = screen.getByText("낭랑 18세");

  //   const checByRole = screen.getByLabelText("성별:");

  // 역할로 버튼 찾기

  const numberText = screen.getByText("품절");
  const buyButton = screen.getByRole("button", { name: "구매하기" });

  // 테스트 ID로 요소 찾기
  //   const emailByTestId = screen.getByTestId("email-input");

  // 모든 요소가 화면에 있는지 확인
  expect(titleByLabel).toHaveTextContent("최서윤");
  expect(desByLabel).toHaveTextContent("낭랑 18세");
  expect(numberText).toBeInTheDocument();
  expect(buyButton).toBeDisabled();
  expect(buyButton).toHaveClass("cursor-not-allowed opacity-50");

  //   expect(emailByTestId).toBeInTheDocument();
});
