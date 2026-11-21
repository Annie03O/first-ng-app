import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/Todo.type';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodosService {
    http = inject(HttpClient);

    getTodosFromApi() {
        const url = "https://dummyjson.com/todos";
        // The API returns { todos: [...], total, skip, limit } — unwrap the array
        return this.http.get<Todo>(url).pipe(map((response) => response.todos));

        
    }
}
