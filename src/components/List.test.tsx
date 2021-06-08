import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import List from "./List";

describe("TODO List", () => {
  it("할일목록 리스트 UI가 회면에 렌더링된다.", () => {
    const { getByText } = render(<List todos={[]} />);
    expect(getByText("할일목록")).toBeInTheDocument();
  });

  it("todo item이 변경되면 리스트에 아이템이 생성된다.", () => {
    const todos = ["컴퓨터하기"];

    const { getByRole } = render(<List todos={todos} />);
    const list = getByRole("list");
    const listItem = getByRole("listitem");
    expect(list.childElementCount).toBe(1);
    expect(listItem.textContent).toBe("컴퓨터하기");
  });
});
