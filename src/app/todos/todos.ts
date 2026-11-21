import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoContent } from '../models/Todo.type';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosInputPipe } from '../pipes/filter-todos-input-pipe';
import { FilterCompletedTodosPipe } from '../pipes/filter-completed-todos-pipe';

@Component({
  imports: [TodoItem, FormsModule, FilterTodosInputPipe, FilterCompletedTodosPipe],
  standalone: true,
  selector: 'app-todos',
  styleUrl: './todos.scss',
  templateUrl: './todos.html',
})
export class TodosComponent implements OnInit{
  todoService = inject(TodosService)  
  todoItems = signal<Array<TodoContent>>([])
  searchTerm = signal("");
  completedTodo = signal(true);

  

  ngOnInit(): void {
    this.todoService.getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);

          throw err;
        })
      ).subscribe((todos) => {
        this.todoItems.set(todos)
      }); 
  }

  updateTodoItem(todoItem: TodoContent) {
    this.todoItems.update((list) =>
      list.map((todo) =>
        todo.id === todoItem.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
}

