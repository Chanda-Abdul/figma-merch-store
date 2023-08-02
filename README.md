# Figma Merch Store challenge | Frontend Practice

![Design preview for the Figma Merch Store  coding challenge](https://www.frontendpractice.com/_next/image?url=%2Ffullsize%2FC2-figma.png&w=1200&q=90)

This is a solution to the [Figma Merch Store](https://www.frontendpractice.com/projects/figma) challenge on [Frontend Practice](https://www.frontendpractice.com/).  

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Demo](#demo)
  - [Screenshots](#screenshots)
- [Features](#features)
- [My process](#my-process)
  - [Built with](#built-with)
  
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge


Code a pixel perfect replication of the [Figma Merch Store](https://store.figma.com/).

Users should be able to:

<!-- - [x] Complete each step of the sequence
- [x] See a summary of their selections on the final step and confirm their order
- [x] View the optimal layout for the interface depending on their device's screen size
- [x] See hover and focus states for all interactive elements on the page -->
## Demo
View live demo <s>[here](https://inquisitive-strudel-fa01fb.netlify.app/)</s>
<!-- <b>Solution URL:</b> [here](https://github.com/Chanda-Abdul/Angular-Multi-step-form) | <b>Live Site URL:</b> [here](https://dazzling-crisp-559db7.netlify.app/) -->
## Screenshots
<!-- Insert a few screenshots of the project, showcasing its functionality and design. -->
![](https://www.frontendpractice.com/_next/image?url=%2Ffullsize%2FC2-figma.png&w=1200&q=90)
# Features
## Animations
  - [Draggable Image Slider](#draggable-slider-using-gsap)
  - [Swap image on hover](#swap-image-on-hover)
  - [Marquee](#marquee-animation)
  - [Circle SVG with rotating text and hover animation](#)
## Styling
  - [Custom Fonts](#)
  - [Dropdown Search](#)
  - [Random color generation](#)
## Angular/JavaScript
  - [Custom Currency Pipe](#)
  - [Content filtering](#)
  - [Shopping Cart](#)
  - [User Reviews/Ratings (Bonus)](#)
  - [Size Chart (Bonus)](#)

### Draggable Slider using GSAP
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript icon" height="28" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS icon" height="28" />![Green Sock](https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

<!--  (animations)  Draggable slider HERO/HEADER COMPONENT -->

- created a draggable slider for the featured images shown in the hero component using [GreenSock Animations](https://greensock.com/)


### Swap image on hover

 <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular icon" height="28" /><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass icon" height="28" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS icon" height="28" /><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML icon" height="28" />

In **`/product-list`**, Utilized a custom **`@Directive`** to swap **`/product-card`**'s default cover image to a pattern/image on **`:hover`**, using <i>CSS animations</i>, opacity and positioning.

- in **`hover-img-swap.directive.ts`**
  ```ts
    @Directive({
      selector: '[hoverImgSwap]',
    })

    export class HoverImgSwapDirective {

      @HostBinding('class.hoverImgSwap')
      get cssClasses() {
        return true;
      }
    }
  ```
- in **`product-card.component.html`**
  ```html
    <div class="product-list__product" hoverImgSwap>

        <figure>

          <img [src]="product.hoverPatternImg"/>

          <img [src]="product.hoverProductImg"/>

          <img [src]="product.productPhotos[0]"/>

        </figure>

        ...

      </div>
  ```
- in **`_animations.scss`**

  ```scss
    .hoverImgSwap {

      figure {
        position: relative;
        border-radius: $border-radius-default;
        border: none;

        img {
          transition: border-color 750ms, opacity 750ms;
          border-radius: $border-radius-default;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          object-fit: cover;
        }

        :first-child,
        :nth-child(2) {
          position: absolute;
          border: $border-default;
          opacity: 0;
        }

        :nth-child(3) {
          position: absolute;
          opacity: 1;
        }
      }

      &:hover {
        figure {
          :first-child {
            opacity: 1;
            width: 100%;
            height: 100%;
          }
        }

        :nth-child(2) {
          opacity: 1;
          max-width: 100%;
          max-height: 100%;
          z-index: 2;
        }

        :nth-child(3) {
          opacity: 0;
        }
      }
    }
  ```
  
  ### Marquee Animation

 <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript icon" height="28" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS icon" height="28" />![Green Sock](https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

- In the **`/footer`** component, Utilized a custom <i>Angular </i>Structural **`@Directive`** to create a scrolling **`<marquee>`** animation of text and **`<svg>`**'s.  **[GreenSock](https://greensock.com/)** was used to create the animation.

- **`marquee.directive.ts`**
  ```ts
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
        x: -this.elRef.nativeElement.offsetWidth,
        repeat: -1,
        duration: 15,
        ease: 'linear'
      })

      gsap.to(content, {
        x: this.elRef.nativeElement.offsetWidth,

      })
        .totalProgress(-.7)
    }
  }
  ```
<i>* If anyone knows how to make this marquee an infinite loop please let me know * </i>



### 
<b>Custom fonts</b>
Hover


<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS icon" height="28" />

- uses custom fonts <i>["Whyte"]('https://www.typewolf.com/whyte')</i>, and <i>"Whyte Inktrap"</i> which features deep ink traps in the joints of letters.  

#### Whyte for bodytext
![](src/assets/screens/font-body.png)

#### Whyte Inktrap Bold for the display text
![](src/assets/screens/font-display.png)



### Dropdown search bar

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS icon" height="28" /><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML icon" height="28" />
<!-- TO-DO => (style) /HOME  dropdown mobile menu  -->

- dropdown search bar when the `magnifying-glass` icon is clicked.








### 
<b>
Circle with rotating text and hover animation</b>
Hover

#
<!-- TO-DO =>  (animations)  /HOME COMPONENT -->

- [ ] Recreate the circle with rotating text and hover animation.


<!-- TO-DO => (animations) (functionality) Add Chaotic sticker Sprinkle -->

<!-- TO-DO => (styles) #SHOP COMPONENT -->

### 
<b>Content filtering
</b>
Hover

#

- [x] Content filtering
- [x] Search bar



### 
<b>Shopping Cart:</b>
Hover

# 

Added a shopping cart: Implement a shopping cart feature that allows users to add products to their cart and view their cart on the homepage.


<!-- TO-DO => (functionality) (bonus) Implement checkout: Implement a checkout feature that allows users to enter their payment and shipping information and complete their purchase. -->



### 
<b>
 Angular in-memory-web-api (Bonus)</b>
 </summary>




### 
<b>User Reviews/Ratings (Bonus)</b>
Hover

#

UI Inspo from [Dribble](https://dribbble.com/shots/21512658-Reviews-and-ratings) 
![https://dribbble.com/shots/21512658-Reviews-and-ratings](/src/assets/screens/dribble-ratings-inspo.png) and [Quince]() 
![quince-mobile-1](/src/assets/screens/quince-mobile-1.png)
![quince-mobile-2](/src/assets/screens/quince-mobile-2.png)



### 
<b>Size Chart (Bonus)</b>
 <!-- TO-DO => (styles) -->
 </summary>



### Custom currency pipe 

<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular icon" height="28" />![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML icon" height="28" />
- Developed a custom Angular pipe  for currency conversion, to update prices based on the selected country. 
- Utilized the [currencybeacon API](https://currencybeacon.com/api-documentation) for most current exchange rates. 
- The default currency is USD
- Country can be selected by using the dropdown on the navigation menu. 
- The pipe converts currency amounts into GBP (British Pound), JPY (Japanese Yen), EUR (Euro), or CAD (Canadian Dollar), providing users with accurate and up-to-date pricing information in their preferred currency.

- **[`currency-conversion.pipe.ts`](/src/app/pipes/currency-conversion.pipe.ts)**

    ```ts
      ...

      export class CurrencyConversionPipe implements PipeTransform {
      ...
      transform(amount: number, country: string, rates: any): any {
          switch (country) {
          ...
          // United Kingdom
          case 'store-uk':
              return formatCurrency(amount * rates['GBP'].exchangeRate, 'en-us', '£', 'GBP', '1.0-0');
          // Japan
          case 'store-jp':
              return formatCurrency(amount * rates['JPY'].exchangeRate, 'en-JP', '¥', 'JPY', '1.0-0');
          // USA or Just browsing
          default:
              return formatCurrency(amount, 'en-US', '$', 'USD', '1.0-0');
          }
      }
      }
    ```

- **[`products.service.ts`](/src/app/services/products.service.ts)**

    ```ts
      ...

      loadExchangeRates(): Observable<any> {

          let exchangeRates;

          return this.http
          .get<any>(`https://api.currencybeacon.com/v1/latest?api_key=${this.converterAPIKey}`)
          .pipe(
              map((res: any) => {
              const rates = res;

              exchangeRates = {
                  'USD': { country: 'United States', selectOption: 'store', exchangeRate: 1 },
                  'CAD': { country: 'Canada', selectOption: 'store-ca', exchangeRate: rates.rates['CAD'] },

                  ...
              }
              return exchangeRates;
              }), 
              shareReplay(),
          )
      }

      ...

    ```

- **`pipe`** in the component template
    ```html
        ...
            <p class="product-list__product--price">
                {{ product.price |  currencyConversion: selectedCountry : (exchangeRates$ | async) }}
            </p>
        ...

    ```
### Random color generation 


 ![brand-colors](/src/assets/screens/paletteZen.png)

# My Process
## Built with
<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular icon" height="28" />![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript icon" height="28" /><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript icon" height="28" /><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass icon" height="28" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS icon" height="28" /><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML icon" height="28" />![BEM](https://img.shields.io/static/v1?style=for-the-badge&message=BEM&color=000000&logo=BEM&logoColor=FFFFFF&label=)<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify icon" height="28" /><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma icon" height="28" />![Green Sock](https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white)


 <!-- TO-DO => (styles) accessibility -->
 <!-- TO-DO => unsubscribe() from everything -->


## What I learned

I enjoyed working on this project it was a nice balance of styling requirements and functional requirements great forntend project to practice with.

### Angular routing
Set up routing: Set up routing so that users can navigate between pages. used `/product/:id` `/product/:name` to route to project page
### Custom Pipes
### Angular `@Directive`
- Implemented custom structural directives to enable reusable and scalable animations in the application. 
- These directives were utilized in the [footer marquee](#marquee-animation), [product hover image swap](#swap-image-on-hover), and draggable image slider components. 
- By encapsulating animation logic within directives, we achieved modularity and reduced code duplication. 
### Angular in-memory-web-api 

### Display products
Used Angular's data binding and router params to display the `/product-list` of `/product-card`'s which route to each `/product` detail pages.  
### Stateless Observable Service using RxJs and Angular Services

[`product.service.ts`](/src/app/services/products.service.ts), [`cart.service.ts`](/src/app/services/cart.service.ts), [`ratings.service.ts`](/src/app/services/ratings.service.ts) - created stateless observable services to store as little state as possible on the client and instead fetch the data from the server when needed in accordance with MVC/MVVM architecture
### JSON Proxy server to store and retrieve data

JSON Proxy server to store and retrieve data, which can be substituted with an express/node server and a database at a later date.

## Useful resources

<!-- - []() -->
- [Angular Data Sharing Reference](https://github.com/H3AR7B3A7/EarlyAngularProjects/tree/master/data-sharing)
- [How to Secure Angular Environment Variables for Use in GitHub Actions](https://betterprogramming.pub/how-to-secure-angular-environment-variables-for-use-in-github-actions-39c07587d590)
- [Create a Shopping Cart Using Angular and Local Storage with PayPal Checkout](https://youtu.be/cWRG2gaZYQw)
- [Scrolling Ticker Tape Web Design Tutorial](https://youtu.be/UKHXjhyumF0)
- [The right way to componentize SVGs for your Angular app](https://cloudengineering.studio/articles/the-right-way-to-componentize-svgs-for-your-angular-app)
- [Angular Currency Pipe & Format Currency In Angular with examples](https://www.angularjswiki.com/angular/angular-currency-pipe-formatting-currency-in-angular/) - Angular Currency Pipe is one of the bulit in pipe in Angular used to format currency value according to given country code,currency,decimal,locale information.
- [Angular CurrencyPipe](https://angular.io/api/common/CurrencyPipe)
- [Proxy Server](#) - JSON server to store and retrieve data
- [Angular in-memory-web-api](#)
- [phosphor icons](https://phosphoricons.com/)
- [:nth-child() pseudo-class](https://www.w3.org/TR/selectors/#nth-child-pseudo)
- [CSS Grid Generator](https://cssgrid-generator.netlify.app/)
- [Udemy: Reactive Angular Course (with RxJs, Angular 16) by Angular University](https://www.udemy.com/course/rxjs-reactive-angular-course) - Build Angular 16 Applications in Reactive style with plain RxJs - Patterns, Anti-Patterns, Lightweight State Management

### Design Resources & Inspiration
- [quince.com - View Product](https://www.quince.com/women/silk-v-neck-cami?color=ivory&gender=women&tracker=collection_page__women%2Fbest-sellers__All%20Products__5)
## Author

<!-- - Website - [Chanda Abdul](https://www.Chandabdul.dev) -->
- GitHub - [github.com/Chanda-Abdul](https://github.com/Chanda-Abdul)



