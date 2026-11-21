import { Component, input, output } from '@angular/core';
import { TodoContent } from '../../models/Todo.type';
// import { HighlightCompletedTodo } from '../../directives/highlight-completed-todo';
import { UpperCasePipe } from '@angular/common';

@Component({
  imports: [ 
    // HighlightCompletedTodo, 
    UpperCasePipe],
  selector: 'app-todo-item',
  styleUrl: './todo-item.scss',
  templateUrl: './todo-item.html',
})

export class TodoItem {
  todo = input.required<TodoContent>();
  todoToggled = output<TodoContent>();

  todoClicked() {
    this.todoToggled.emit(this.todo())
  }
}
