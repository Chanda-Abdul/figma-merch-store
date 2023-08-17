import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHideShowNav]'
})
export class HideShowNavDirective {
  offsetFlag = true;
  prevYScroll = 0;


  constructor(private elRef: ElementRef) { }

  @HostListener('window:scroll', ['$event']) getScrollHeight(event:Event) {
    let el = this.elRef.nativeElement;
    console.log(el, this.prevYScroll, el.scrollY)
    if(scrollY> this.prevYScroll )
     this.offsetFlag = false;
    else
      this.offsetFlag = true;

      this.prevYScroll = scrollY
 }

}
