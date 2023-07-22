import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  isMobile = true;

  menuLinks = {
    default: [
      { text: 'Shop', link: '/#shop' },
      { text: 'About', link: 'about' }
    ],
    legal: [
      { text: 'Privacy & Terms', link: 'privacy-policy' },
      { text: 'Contact Us', link: '/about#contact' }
    ]
  }

  @Output() toggleSearchEvent = new EventEmitter<boolean>();

  searchBarVisible = false;

  locationSelectVisible = false;

  locationOptions = [
    { optionValue: "store-ca", country: "Canada", selected: false },
    { optionValue: "store-jp", country: "Japan", selected: false },
    { optionValue: "store-uk", country: "United Kingdom", selected: false },
    { optionValue: "store", country: "United States", selected: true },
    { optionValue: "store", country: "I'm just browsing", selected: false }
  ]

  selectedCountry: string = "United States";

  cartCount$!: Observable<number>;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.setMenuLinks();
this.setCartCount(); 
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

  updateLocation(value: any) {
    console.log(value)
  }

  setCartCount() {
    this.cartCount$ = this.cartService.loadCartCount();
    // TO-DO => update on changes
    console.log(this.cartCount$)
  }
}
