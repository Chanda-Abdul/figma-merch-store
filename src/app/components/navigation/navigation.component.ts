import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output() toggleSearchEvent = new EventEmitter<boolean>();

  searchBarVisible = false;

  locationSelectVisible = false;

  isMobile = true;

  menuLinks = {
    default: [
      { text: 'Shop', link: '#shop' },
      { text: 'About', link: 'about' }
    ],
    legal: [
      { text: 'Privacy & Terms', link: 'privacy-policy' },
      { text: 'Contact Us', link: 'about#contact' }
    ]
  }

  locationOptions = [
    { optionValue: "store-ca", country: "Canada", selected: false },
    { optionValue: "store-jp", country: "Japan", selected: false },
    { optionValue: "store-uk", country: "United Kingdom", selected: false },
    { optionValue: "store", country: "United States", selected: true },
    { optionValue: "store", country: "I'm just browsing", selected: false }
  ]

  currentLocation = this.locationOptions[3].country;

  ngOnInit(): void {
    this.setMenuLinks();

  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(event: Event) {
    this.setMenuLinks();
  }

  private setMenuLinks() {
    this.isMobile = window.innerWidth < 900 ? true : false;

  }

  toggleSearchBar(toggleSearchVisibility: boolean) {
    this.searchBarVisible = !this.searchBarVisible
    this.toggleSearchEvent.emit(toggleSearchVisibility);
  }

  togglelocationSelector() {
    this.locationSelectVisible = !this.locationSelectVisible
  }

  updateLocation(value:any) {
    console.log(value)
   }
}
