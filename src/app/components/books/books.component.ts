import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  buyStatus: string = "buy now";

  books: {id:number,name:string;price:number; amount:number; imag:string} []=[
    {
      id:1,
      name:"book1",
      price:100,
      amount:5,
      imag:"w.jpg"
    },
    {
      id:1,
      name:"book2",
      price:90,
      amount:1,
      imag:"w.jpg"
    },
    {
      id:1,
      name:"book3",
      price:10,
      amount:0,
      imag:"w.jpg"
    }
  ]

}
