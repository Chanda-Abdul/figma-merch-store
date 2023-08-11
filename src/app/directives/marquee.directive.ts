import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[marqueeDirective]'
})

export class MarqueeDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.initializeMarquee();
  }

  initializeMarquee(): void {
    let content = this.elRef.nativeElement.childNodes;

    gsap.from(content, {
      x: this.elRef.nativeElement.offsetWidth / 100,
      //To-Do => add infinite repeat
      repeat: -1,
      duration: 9,
      ease: 'linear',
    })

    gsap.to(content, {
      x: -this.elRef.nativeElement.offsetWidth * 4,

    })
      .totalProgress(-.7)
  }
}
