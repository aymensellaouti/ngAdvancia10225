import { TodoApi } from "./todo-api.dto";

export interface TodoApiResponse {
  todos: TodoApi[];
  total: number;
  skip: number;
  limit: number;
}

