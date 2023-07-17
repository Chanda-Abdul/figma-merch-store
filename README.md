# Figma Merch Store challenge | Frontend Practice

<!-- A brief description of the project. -->
![Design preview for the Figma Merch Store  coding challenge](https://www.frontendpractice.com/_next/image?url=%2Ffullsize%2FC2-figma.png&w=1200&q=90)

This is a solution to the [Figma Merch Store](https://www.frontendpractice.com/projects/figma) challenge on [Frontend Practice](https://www.frontendpractice.com/).  
# Challenge


Code a pixel perfect replication of the [Figma Merch Store](https://store.figma.com/) site created by [ ](#)
## Demo
View live demo <s>[here](https://inquisitive-strudel-fa01fb.netlify.app/)</s>

## Screenshots
<!-- Insert a few screenshots of the project, showcasing its functionality and design. -->
![](https://www.frontendpractice.com/_next/image?url=%2Ffullsize%2FC2-figma.png&w=1200&q=90)
## Technologies Used
<!-- List the programming languages, frameworks, libraries, and any other tools or technologies used in the project. -->
<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular icon" height="28" />![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript icon" height="28" /><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript icon" height="28" /><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass icon" height="28" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS icon" height="28" /><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML icon" height="28" />![BEM](https://img.shields.io/static/v1?style=for-the-badge&message=BEM&color=000000&logo=BEM&logoColor=FFFFFF&label=)<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify icon" height="28" /><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma icon" height="28" />![Green Sock](https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

## Features
<!-- List the main features of the project, with brief descriptions of each. -->
<details><summary><b>Custom fonts</b></summary> 
uses custom fonts <i>["Whyte"]('https://www.typewolf.com/whyte')</i>, and <i>"Whyte Inktrap"</i> which features deep ink traps in the joints of letters.  

#### Whyte for bodytext
![](src/assets/screens/font-body.png)

#### Whyte Inktrap Bold for the display text
![](src/assets/screens/font-display.png)
</details>

<details><summary><b>Dropdown search bar</b></summary> 

<!-- TO-DO => (style) /HOME  dropdown mobile menu  -->

- [x] dropdown search bar when the icon is clicked.</details>
<!-- TO-DO =>  (animations) HERO/HEADER COMPONENT -->

<details><summary><b>Draggable Slider using GSAP</b></summary> 

created a draggable slider for the featured images shown in the hero component using [GreenSock Animations](https://greensock.com/)

- [ ] Draggable slider 
<!-- How to Create a Draggable slider-->
</details>

<details>
<summary>
<b>
Circle with rotating text and hover animation</b>
</summary> 
<!-- TO-DO =>  (animations)  /HOME COMPONENT -->
- [ ] Recreate the circle with rotating text and hover animation.

</details>
<!-- TO-DO => (functionality) create custom currency pipe to change product price according to selected region  -->
<!-- TO-DO => (animations) (functionality) Add Chaotic sticker Sprinkle -->
<!-- TO-DO => (styles) organize SVGs -->

<details>
<summary>
<b>
 Change image on hover</b>
 </summary> 

Hover effects - Change image on hover

<!-- TO-DO => (styles) #SHOP COMPONENT -->
<!-- TO-DO => (styles) /ABOUT COMPONENT -->

</details>
<details><summary><b>Content filtering
</b></summary> 
<!-- TO-DO => (functionality) /SEARCH COMPONENT -->
- [ ] Content filtering
- [ ] Search bar
</details>

<details><summary><b>Shopping Cart:
</b></summary> 
<!-- TO-DO => (functionality) (styles) /CART COMPONENT Add a shopping cart: Implement a shopping cart feature that allows users to add products to their cart and view their cart on the homepage.-->
</details>

<!-- TO-DO => (functionality) (bonus) Implement checkout: Implement a checkout feature that allows users to enter their payment and shipping information and complete their purchase. -->


<details><summary><b>
 Angular in-memory-web-api (Bonus)</b>
 </summary>
</details>
<!-- TO-DO => (animations) (functionality)footer ticker tape -->
<details>
<summary>
<b>User Reviews/Ratings (Bonus)</b>
</summary> 
<!-- TO-DO => (styles) -->
UI Inspo from [Dribble](https://dribbble.com/shots/21512658-Reviews-and-ratings) ![https://dribbble.com/shots/21512658-Reviews-and-ratings](/src/assets/screens/dribble-ratings-inspo.png)
</details>
<details>
<summary>
<b>Size Chart (Bonus)</b>
 <!-- TO-DO => (styles) -->
 </summary>
</details>

## Installation
<!-- Provide step-by-step instructions on how to download, install, and run the project on a local machine. -->
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.



## What I learned

I enjoyed working on this project it was a nice balance of styling requirements and functional requirements great forntend project to practice with.

<!-- Process   -->
### Angular routing
Set up routing: Set up routing so that users can navigate between pages. used `/product/:id` `/product/:name` to route to project page
### Display products
Used Angular's data binding  and router params to display the `/product-list` of `/product-card`'s which route to each `/product` detail pages.  
### Stateless Observable Service using RxJs and Angular Services
created a stateless observable service `product.service.ts` to store as little state as possible on the client and instead fetch the data from the server when needed
- MVC/MVVM architecture
### JSON server to store and retrieve data
<!-- Connect to a backend using JSON serverthat provides data about your products. This can be done using HTTP requests or a service. -->

## Continued development
## Useful resources
<!-- List any external resources or libraries used in the project, as well as any contributors or collaborators. -->
- [Angular Currency Pipe & Format Currency In Angular with examples](https://www.angularjswiki.com/angular/angular-currency-pipe-formatting-currency-in-angular/) - Angular Currency Pipe is one of the bulit in pipe in Angular used to format currency value according to given country code,currency,decimal,locale information.
- [Angular CurrencyPipe](https://angular.io/api/common/CurrencyPipe)
- [Angular in-memory-web-api](https://angular.io/tutorial/tour-of-heroes/toh-pt6)
-  [angular.io](https://angular.io/tutorial/tour-of-heroes/toh-pt2)
- [phosphor icons](https://phosphoricons.com/)
- [Auto-placement in grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [:nth-child() pseudo-class](https://www.w3.org/TR/selectors/#nth-child-pseudo)
- [CSS Grid Generator](https://cssgrid-generator.netlify.app/)
- [Udemy: Reactive Angular Course (with RxJs, Angular 16) by Angular University](https://www.udemy.com/course/rxjs-reactive-angular-course) - Build Angular 16 Applications in Reactive style with plain RxJs - Patterns, Anti-Patterns, Lightweight State Management
## Author

- Website - [Chanda Abdul](https://www.Chandabdul.dev)
- GitHub - [github.com/Chanda-Abdul](https://github.com/Chanda-Abdul)




