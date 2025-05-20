import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todo! : string;
  age! : string;
  // todoList : string[] =[]; 
  todoList: { text: string, done: boolean }[] = []; // 3shan specifie it
  flag : boolean = false ; 

  ADD() {
  this.todoList.push({ text: this.todo, done: false });
  this.todo = '';
}

    delete(index: number) {
    this.todoList.splice(index, 1);
  }

  done (index : number)
  {
  this.todoList[index].done = !this.todoList[index].done;
  }


}
