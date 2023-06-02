import {Component} from '@angular/core';
import {AddTodo, DeleteTodo, Todo, ToggleComplete} from "./Todo";
import {MatDialog} from "@angular/material/dialog";
import {AddTodoComponent} from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  constructor(public dialog: MatDialog) {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddTodoComponent, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {addTodo: this.addTodo.bind(this)}, // Pass the addTodo function to the Dialog via Data
    });
  }

  todos: Array<Todo> = [{
    id: 1,
    title: 'Todo 1',
    description: 'Description 1',
    completed: false
  },
    {
      id: 2,
      title: 'Do Homework',
      description: 'Do your homework for all subjects',
      completed: true
    }, {
      id: 3,
      title: 'Wash Dishes',
      description: 'Wash all the dishes in the sink',
      completed: false
    }];


  deleteTodo: DeleteTodo = (todoId) => {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  };

  toggleComplete: ToggleComplete = (todoId) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }

  addTodo: AddTodo = (todo) => {
    const newTodo: Todo = {
      ...todo, id: this.todos[this.todos.length - 1].id + 1,
      completed: false
    }
    this.todos.push(newTodo);
  }


}
