import { Pipe, PipeTransform } from '@angular/core';
import { TodoContent } from '../models/Todo.type';

@Pipe({
  name: 'filterCompletedTodos',
  standalone: true
})
export class FilterCompletedTodosPipe implements PipeTransform {
  transform(todos: TodoContent[], completed: boolean): TodoContent[] {
    return todos.filter(todo => todo.completed === completed);
  }
}