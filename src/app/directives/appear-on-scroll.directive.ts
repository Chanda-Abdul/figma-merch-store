import { Directive, ElementRef, HostListener } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Directive({
  selector: '[appearOnScrollDir]'
})
export class AppearOnScrollDirective {

  constructor(private elRef: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
   
    let el = this.elRef.nativeElement;
    //  console.log(el)
    //  gsap.from(el, {
    //   opacity: 0,
    //  })
    //  gsap.to(el, {
    //   scrollTrigger: {
    //     trigger: el,
    //     // scrub: true,
    //     // toggleClass: 'active',
    //     start: '-60% bottom',
    //   },
    //   duration: .5,
    //   // height: 0,
    //   // scale: '1.1',
    //   opacity: 1,
    // });
    // Get the position of the element relative to the viewport
    // const elementOffsetTop = this.elRef.nativeElement.getBoundingClientRect().top;

    // Calculate the threshold at which the animation should start
    // const threshold = window.innerHeight - 100;
// console.log(elementOffsetTop, threshold)
    // If the element is within the viewport
    // if (elementOffsetTop < threshold) {

    //   // gsap.from(this.elRef.nativeElement, {
    //   //   opacity: 0,
    //   //   // duration: 0.5,
    //   //   // ease: 'power2.out'
    //   // });
    //   // Use GSAP to animate the opacity of the element
      gsap.to(this.elRef.nativeElement, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      });

      // Unbind the scroll event to prevent unnecessary animation
      // window.removeEventListener('scroll', this.onScroll);
    }
  }
// }
