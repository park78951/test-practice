import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import List from "./List";
import Input from "./Input";

describe("TODO List", () => {
  it("할일목록 리스트 UI가 회면에 렌더링된다.", () => {
    const { getByText } = render(<List todos={[]} />);
    expect(getByText("할일목록")).toBeInTheDocument();
  });

  it("할일을 입력하면 리스트에 아이템이 생성된다.", () => {});
});
