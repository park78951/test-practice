import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

const submit = jest.fn();

describe("Input Form", () => {
  it("input을 렌더링한다.", () => {
    const { getByPlaceholderText } = render(<Input onSubmit={submit} />);
    expect(getByPlaceholderText("할일을 추가해주세요")).toBeInTheDocument();
  });

  it("input에서 정상적으로 값을 변경한다.", () => {
    const { getByPlaceholderText } = render(<Input onSubmit={submit} />);
    const input = getByPlaceholderText(
      "할일을 추가해주세요"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "컴퓨터하기" } });
    expect(input.value).toBe("컴퓨터하기");
  });

  it("버튼을 클릭하여 onSubmit 함수를 실행한다.", () => {
    const { getByText } = render(<Input onSubmit={submit} />);
    const button = getByText("추가") as HTMLButtonElement;

    fireEvent.click(button);
    expect(submit).toHaveBeenCalled();
  });

  it("버튼 클릭시 input의 값을 삭제한다.", () => {
    const { getByText, getByPlaceholderText } = render(
      <Input onSubmit={submit} />
    );
    const button = getByText("추가") as HTMLButtonElement;
    const input = getByPlaceholderText(
      "할일을 추가해주세요"
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "컴퓨터하기" } });
    fireEvent.click(button);
    expect(input.value).toBe("");
  });
});
