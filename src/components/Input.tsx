import React, { FC, useState, useCallback } from "react";
import { css } from "@emotion/react";

const Input: FC = () => {
  const [value, setValue] = useState("");

  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValue(value);
    },
    []
  );

  return (
    <form css={FormStyle}>
      <input
        value={value}
        onChange={onChangeValue}
        css={InputStyle}
        placeholder="할일을 추가해주세요"
      />
    </form>
  );
};

const FormStyle = css`
  display: flex;
  justify-content: space-between;
  width: 360px;
  height: 60px;
  border-radius: 4px;
  background-color: lightblue;
  padding: 0 10px;
  margin: 0 auto;
`;

const InputStyle = css`
  width: 240px;
  height: 20px;
  background-color: transparent;
  padding-left: 10px;
  border: none;
  border-bottom: 1px solid #000;
  margin-top: 20px;
`;

export default Input;
