import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoAngular';
  
  actions : Array<any> = [
    {title : "Home", router : "/home" , icon : "bx bx-home mr-1"},
    {title : "Product", router : "/product" , icon : "bx bx-product mr-1"},
    {title : "New-product", router : "/new-product" , icon : "bx bx-plus-circle mr-1"}
  ]
 

  currentAction : any;

  selectBtn(action: any) {
    this.currentAction = action;
  }

}
