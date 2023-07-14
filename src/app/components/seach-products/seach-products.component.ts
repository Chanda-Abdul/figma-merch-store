import { Component } from '@angular/core';

@Component({
  selector: 'app-seach-products',
  templateUrl: './seach-products.component.html',
  styleUrls: ['./seach-products.component.scss']
})
export class SeachProductsComponent {
  searchFor(searchInput:string){
    console.log(searchInput)
  }
}
