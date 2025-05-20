import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  name: string = 'Abody';
  imagPersonal: string = 'w.jpg';
  imagInFolder:string="graduate2.jpg";
  altTxt:string = "wrong path"

  student: {id:number,name:string}={
    id: 1,
    name: "Abody"
  };
  
}
