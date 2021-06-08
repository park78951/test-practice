import React, { FC } from "react";
import { css } from "@emotion/react";

interface IListProps {
  todos: string[];
}

const List: FC<IListProps> = ({ todos }) => {
  return (
    <div>
      <h2>할일목록</h2>
      <ul css={ListContainer}>{todos.map(todo => todo)}</ul>
    </div>
  );
};

const ListContainer = css`
  width: 360px;
  height: 460px;
  border-radius: 4px;
  background-color: lightblue;
  overflow-y: auto;
`;

export default List;
