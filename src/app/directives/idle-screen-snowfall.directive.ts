import { Directive } from '@angular/core';

@Directive({
  selector: '[appIdleScreenSnowfall]'
})
export class IdleScreenSnowfallDirective {
  stickers = [
    `<svg xmlns="http://www.w3.org/2000/svg"
     aria-hidden="true">
    <use xlink:href="assets/stickers.svg#bio-pill"></use>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg"
     aria-hidden="true">
    <use xlink:href="assets/stickers.svg#bio-hourglass"></use>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg"
     aria-hidden="true">
    <use xlink:href="assets/stickers.svg#glow-sweet"></use>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg"
     aria-hidden="true">
    <use xlink:href="assets/stickers.svg#glow-arch"></use>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg"
     aria-hidden="true">
    <use xlink:href="assets/stickers.svg#glow-sup"></use>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg"
     aria-hidden="true">
    <use xlink:href="assets/stickers.svg#lilac-hourglass"></use>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg"
     aria-hidden="true">
    <use xlink:href="assets/stickers.svg#sunflower-square"></use>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg"
     aria-hidden="true">
    <use xlink:href="assets/stickers.svg#sunflower-barbell"></use>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg"
     aria-hidden="true">
    <use xlink:href="assets/stickers.svg#sunflower-figure"></use>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg"
     aria-hidden="true">
    <use xlink:href="assets/stickers.svg#sunflower-oval"></use>
</svg>`
  ]


  constructor() { }



}
