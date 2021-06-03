import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Form", () => {
  it("input을 렌더링한다.", () => {
    const { getByPlaceholderText } = render(<Input />);
    expect(getByPlaceholderText("할일을 추가해주세요")).toBeInTheDocument();
  });

  it("input에서 정상적으로 값을 변경한다.", () => {
    const { getByPlaceholderText } = render(<Input />);
    const input = getByPlaceholderText(
      "할일을 추가해주세요"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "컴퓨터하기" } });
    expect(input.value).toBe("컴퓨터하기");
  });

  it("버튼을 클릭하여 onSubmit 함수를 실행한다.", () => {
    const mockFn = jest.fn();
    const { getByText } = render(<Input onSubmit={mockFn} />);
    const button = getByText("추가") as HTMLButtonElement;
    fireEvent.click(button);
  });
});
