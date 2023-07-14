import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  searchBarVisible = false;

  isMobile = true;

  legalLinks = [
    { text: 'Privacy & Terms', link: 'privacy-policy' },
    { text: 'Contact Us', link: 'about#contact' }
  ]
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

  showlocationSelector(){}
}
