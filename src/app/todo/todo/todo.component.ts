import { Component, inject } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent {
  todoService = inject(TodoService);
  todo = new Todo();
  todos = this.todoService.getTodos();
  constructor() {
    this.todoService.getTodoFromApi().subscribe({
      next: (todos) => {
        console.log({todos});
      },
      error: (e) => {
        console.log(e);
      }
    })
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
