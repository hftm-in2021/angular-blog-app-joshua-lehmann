export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

type NewTodo = Omit<Todo, 'id' | 'completed'>;

export type DeleteTodo = (todoId: number) => void;
export type ToggleComplete = (todoId: number) => void;
export type AddTodo = (todo: NewTodo) => void;
