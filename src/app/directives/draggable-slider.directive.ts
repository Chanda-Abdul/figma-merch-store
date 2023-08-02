import { Directive } from '@angular/core';

@Directive({
  selector: '[appDraggableSlider]'
})
export class DraggableSliderDirective {

// @Input('hoverImgSwap')
// isHovered = false;

// @Output()
// toggleHover = new EventEmitter();

// @HostBinding('class.hoverImgSwap')
// get cssClasses() {
//   // return this.isHovered;
//   return true;
// }


constructor() { }
// @HostListener('mouseover', ['$event'])
// onMouseOver($event:any) {
//   console.log($event);
//   this.isHovered = true;
//   // console.log('mouse in');

//   // this.isHovered = true;
//   // this.toggleHover.emit(this.isHovered);
// }

//   @HostListener('mouseleave', ['$event'])
//   onMouseLeave($event:any) {
  
// console.log($event);
//     this.isHovered = false;
//     // console.log('mouse out');
//     // this.isHovered = false;
//     // this.toggleHover.emit(this.isHovered);
//   }

// toggle() {
//   this.isHovered = !this.isHovered;
//   this.toggleHover.emit(this.isHovered);
// }

}
