import React, { FC } from "react";
import { css } from "@emotion/react";

interface IListProps {
  todos: string[];
}

const List: FC<IListProps> = ({ todos }) => {
  return (
    <div>
      <h2>할일목록</h2>
      <ul role="list" css={ListContainer}>
        {todos.map((todo, index) => (
          <li role="listitem" key={`todo_${index}`}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ListContainer = css`
  width: 360px;
  height: 460px;
  border-radius: 4px;
  background-color: lightblue;
  overflow-y: auto;
  padding: 20px;

  & > li {
    display: block;
    margin-bottom: 6px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default List;
