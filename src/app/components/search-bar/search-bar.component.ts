import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class searchBarComponent {

  constructor(private router: Router){}
  searchFor(searchInput:string){
    console.log(searchInput);
    this.router.navigate(['/find', searchInput])
  }
}
