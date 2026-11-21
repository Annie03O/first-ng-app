import { Pipe, PipeTransform } from '@angular/core';
import { Todo, TodoContent } from '../models/Todo.type';

@Pipe({
  name: 'filterTodos',
  standalone: true
})

export class FilterTodosInputPipe implements PipeTransform {
  transform(todos: TodoContent[], searchTerm: string): TodoContent[] {
    if (!searchTerm) return todos;
    
    const text = searchTerm.toLowerCase();

    return todos.filter(todo => {
      return todo.todo.toLowerCase().includes(text)
    })
  }
}
