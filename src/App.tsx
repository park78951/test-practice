import React, { useCallback } from "react";
import { css } from "@emotion/react";
import Input from "./components/Input";

function App() {
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <div css={MayLayout}>
      <h1 css={Title}>TODO 리스트</h1>
      <Input onSubmit={onSubmit} />
    </div>
  );
}

const MayLayout = css`
  width: 400px;
  height: 800px;
  background-color: Grey;
  margin: 30px auto;
  padding: 1px 20px;
`;

const Title = css`
  font-size: 48px;
  text-align: center;
`;

export default App;
