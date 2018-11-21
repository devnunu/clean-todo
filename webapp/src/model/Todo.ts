interface Todo {
  id: number;
  userId: string;
  title: string;
  updateAt: string;
  createdAt: string;
  completed: boolean;
}

export interface TodoState {
  todoList: Todo[];
}

export default Todo;
