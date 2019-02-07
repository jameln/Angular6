import { TodoService } from './../services/todo.service';
import { Todo } from './../Model/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  name: string;
  desc: string;
  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.name = '' ;
    this.desc = '';
    this.todos = this.todoService.getTodo();
  }
  addTodos() {
    const todo = new Todo(this.name, this.desc);
    this.todoService.addTodo(todo);
    this.name = '' ;
    this.desc = '';
  }
  removeTodo(todo: Todo) {
    console.log(todo);
    this.todoService.deleteTodo(todo);
  }

}
