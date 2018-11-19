interface Todo {
  id: number;
  userId: string;
  title: string;
  updateAt: string;
  createdAt: string;
}

export interface TodoState {
  todoList: Todo[];
}

export default Todo;
