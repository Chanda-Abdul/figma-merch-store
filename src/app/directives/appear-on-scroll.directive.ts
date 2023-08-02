import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appearOnScrollDirective]'
})
export class AppearOnScrollDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @Input('appearOnScroll') appearOnScrollContent: string = "";


  createAppearOnScroll() {
    const appearEl = this.renderer.createElement('div');
    const text = this.renderer.createText(this.appearOnScrollContent);
    this.renderer.appendChild(appearEl, text);
  }
  @HostListener('mouseover') onMouseOver() {
    console.log('Mouse in...');
  }

}
