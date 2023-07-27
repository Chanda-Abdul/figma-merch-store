import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit  {
  title = 'Figma Merch Store';
  selectedCountry: string = 'store';
  constructor(private router: Router) {}
  ngOnInit() {
    // this.router.events.subscribe((event) => console.log(event));
  }

  onCountrySelectionChange() {
    // country: string
    // this.selectedCountry = country;$event:any
    console.log('Selected Country in Parent Component:', this.selectedCountry);
  }
}
