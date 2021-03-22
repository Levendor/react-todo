import React, { FC } from "react";
import { TodoListProps } from "../../types/";
import TodoListItem from "./TodoListitem";
import './style.scss';

const TodoList: FC<TodoListProps> = ({ todos, onItemClick }: TodoListProps) => (
  <div className="border">
    <ul className="list">
      {
        todos.length
        ? todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} onItemClick={onItemClick} />
        ))
        : <li className="nothing"><span className="list-item-text">Nothing to do here</span></li>
      }
    </ul>
  </div>
);

export default TodoList;
