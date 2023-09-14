import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appearOnScrollDir]'
})

export class AppearOnScrollDirective implements AfterViewInit {

  scrollTrigger!: ScrollTrigger;

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.revealImageOnScroll();
  }

  revealImageOnScroll() {

    let content = this.elRef;


    const scrollContainer = gsap.timeline({
      paused: true,
      defaults: { duration: 1.5, opacity: 0, y: 0 },
      scrollTrigger: {
        trigger: content.nativeElement,
        start: 'top center',
        toggleActions: 'play none none reverse',
      }

    })
    scrollContainer.from(content.nativeElement, { y: 10, opacity: 0, duration: 1.5 });
  }


}
