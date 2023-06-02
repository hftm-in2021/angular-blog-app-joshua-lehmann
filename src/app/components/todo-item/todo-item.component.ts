import {Component, Input} from '@angular/core';
import {ToggleComplete, DeleteTodo, Todo} from "../todos/Todo";
import { faCircleCheck} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() deleteTodo!: DeleteTodo;
  @Input() completeTodo!: ToggleComplete;

  faCircleCheck = faCircleCheck;
}
