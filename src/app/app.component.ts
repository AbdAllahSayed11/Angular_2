import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { BooksComponent } from "./components/books/books.component";
import { TodosComponent } from "./components/todos/todos.component";
import { TracksComponent } from "./components/tracks/tracks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent, BooksComponent, TodosComponent, TracksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab2';
}
