import React, { FC, useState } from "react";
import TodoControls from './TodoControls';
import TodoList from './TodoList';
import { ToDoListItem } from "../types";
import { getItemIndexById, getNewArrayWithReplacedItem, getNewId } from "../utils";
import './style.scss';

const App: FC = () => {
  const [todos, setTodos] = useState<ToDoListItem[]>([
    {id: 1, name: 'get to work', completed: false},
    {id: 2, name: 'try not to sleep', completed: false},
    {id: 3, name: 'finish the task', completed: false},
    {id: 4, name: 'teeth clean', completed: false},
    {id: 5, name: 'do housework', completed: false},
    {id: 6, name: 'do training', completed: false},
    {id: 7, name: 'check homework', completed: false},
  ])

  const completeItem = (id: number) => {
    setTodos((todos) => {
      const oldItemIndex = getItemIndexById(todos, id);
      const oldItem = todos[oldItemIndex];
      const completedItem = { ...oldItem, completed: !oldItem?.completed};
      const newArray = getNewArrayWithReplacedItem(todos, completedItem, oldItemIndex);
      return newArray;
    });
  }

  const addItem = (text: string) => {
    try {
      if (text && text.match(/[A-Za-z0-9]+/)) setTodos((todos) => {
        const todo: ToDoListItem = {
          id: getNewId(todos),
          name: text,
          completed: false,
        }
        const newArray = [...todos, todo];
        return newArray;
      });
      else throw Error('invalid input!');
    } catch (error) {
        console.log(text ? text : '""', 'is invalid input!');
    }
  }

  const deleteCompletedItem = () => {
    setTodos((todos) => {
      const newArray = todos.filter((todo) => !todo.completed);
      return newArray;
    });
  }

  return (
    <div className="wrapper border">
      <h2 className="title border">TypeScript Todo List</h2>
      <TodoList todos={todos} onItemClick={completeItem}/>
      <TodoControls onItemAdd={addItem} onDeleteCompletedItem={deleteCompletedItem} />
    </div>
  );
}

export default App;
