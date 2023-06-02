import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AddTodoData} from "./AddTodo";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  constructor(public dialogRef: MatDialogRef<AddTodoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AddTodoData
  ) {
  }

  title: string = '';
  description: string = '';


  onAddTodo(): void {
    this.data.addTodo({title: this.title, description: this.description}); // Call the passed onClick function
    this.dialogRef.close();
  }

}
