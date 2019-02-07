import { Injectable } from '@angular/core';
import { Todo } from '../Model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

 tasks: Todo[];
  constructor() {
    this.tasks = [];
   }
  getTodo() {
    return this.tasks;
  }
  addTodo(todo: Todo) {
    this.tasks.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.tasks.indexOf(todo);
    if ( index < 0 ) {
      alert('error');
    } else {
      this.tasks.splice(index, 1);
    }
  }
}
