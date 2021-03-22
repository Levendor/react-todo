import React, { FC, FormEvent, useState } from "react";
import { TodoControlsProps } from "../../types";
import './style.scss';

const TodoControls: FC<TodoControlsProps> = ({ onItemAdd, onDeleteCompletedItem }) => {
  const [inputText, setInputText] = useState('');
  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    onItemAdd(inputText);
    event.preventDefault();
    setInputText('');
  }
  return (
    <div className="controls border">
      <form className="controls-form" onSubmit={submitHandler}>
        <button className="add-button">
          Add
        </button>
        <input className="controls-input"
          placeholder="What do you need to get done?"
          onChange={onInput} value={inputText}
          maxLength={50} />
      </form>
      <button className="clear-button" onClick={onDeleteCompletedItem}>
        Clear Completed
      </button>
    </div>
  );
}

export default TodoControls;
