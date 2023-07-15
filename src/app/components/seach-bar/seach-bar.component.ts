import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seach-bar',
  templateUrl: './seach-bar.component.html',
  styleUrls: ['./seach-bar.component.scss']
})
export class SeachBarComponent {

  constructor(private router: Router){}
  searchFor(searchInput:string){
    console.log(searchInput);
    this.router.navigate(['/search', searchInput])
  }
}
