import React, { FC } from 'react';
import { TodoListItemProps } from '../../../types';
import './style.scss';

const TodoListItem: FC<TodoListItemProps> = ({ todo, onItemClick }: TodoListItemProps) => {
  const { id, name, completed } = todo;
  const crossed = completed ? "crossed" : "";
  return (
    <li className="list-item border" 
      onClick={() => onItemClick(id)}
      >
      <span className={`list-item-text ${crossed}`}>
        {name}
      </span>
    </li>
  );
}

export default TodoListItem;
