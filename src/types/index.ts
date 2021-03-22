export type TodoListProps = {
  todos: ToDoListItem[];
  onItemClick: (id: number) => void;
};

export type TodoListItemProps = {
  todo: ToDoListItem;
  onItemClick: (id: number) => void;
}

export type TodoControlsProps = {
  onItemAdd: (text: string) => void;
  onDeleteCompletedItem: () => void;
}

export type ToDoListItem = {
  id: number;
  name: string;
  completed: boolean;
};