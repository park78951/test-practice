import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("TODO 앱", () => {
  it("TODO 리스트 앱이 화면에 출력된다", () => {
    const { getByText } = render(<App />);
    expect(getByText("TODO 리스트")).toBeInTheDocument();
  });
});
