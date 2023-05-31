import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";
import {TodosComponent} from './components/todos/todos.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {TodoItemComponent} from './components/todo-item/todo-item.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AddTodoComponent} from './components/add-todo/add-todo.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatSliderModule, FormsModule, MatCardModule, MatButtonModule, FontAwesomeModule, MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
