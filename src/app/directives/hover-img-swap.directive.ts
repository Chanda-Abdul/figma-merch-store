import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[hoverImgSwapDirective]',
})

export class HoverImgSwapDirective {

  @HostBinding('class.hoverImgSwap')
  get cssClasses() {
    return true;
  }
}
