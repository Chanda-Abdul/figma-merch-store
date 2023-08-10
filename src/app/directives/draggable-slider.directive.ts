import { Directive, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { Draggable } from "gsap/Draggable";

@Directive({
  selector: '[dragSliderDir]'
})

export class DraggableSliderDirective {
  draggable!: Draggable;

  constructor(private imagesRef: ElementRef) { }

  ngAfterViewInit() {
    gsap.registerPlugin(Draggable);
    this.initializeDragabbleSlider();
  }

  initializeDragabbleSlider() {
    let content = this.imagesRef.nativeElement;
    let slider = content.parentNode;

    this.draggable = new Draggable(content, {
      type: 'x',
      repeat: -1,
      edgeResistance: 2,
      dragResistance: .1,
      snap: (val) => Math.round(val / 100) * 100,
      bounds: slider,
      paused: true,
      center: false,
      throwProps: true,
      // snap: { x: [20, 80] }
    })

  }

  //TO-DO => add Infinite loop

}

