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
<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular icon" height="30" /><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript icon" height="30" /><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript icon" height="30" /><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass icon" height="30" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS icon" height="30" /><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML icon" height="30" /><img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify icon" height="30" /><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma icon" height="30" />![BEM](https://img.shields.io/static/v1?style=for-the-badge&message=BEM&color=000000&logo=BEM&logoColor=FFFFFF&label=)![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)

## Features
<!-- List the main features of the project, with brief descriptions of each. -->
<details><summary><b>Custom fonts</b></summary> 
uses custom fonts <i>["Whyte"]('https://www.typewolf.com/whyte')</i>, and <i>"Whyte Inktrap"</i> which features deep ink traps in the joints of letters.  

#### Whyte for bodytext
![](src/assets/screens/font-body.png)

#### Whyte Inktrap Bold for the display text
![](src/assets/screens/font-display.png)
</details>

<!-- TO-DO => NAV COMPONENT -->
<!-- TO-DO => /HOME  dropdown mobile menu -->
<details><summary><b>Dropdown search bar</b></summary> 
- [ ] dropdown search bar when the icon is clicked.</details>
<!-- TO-DO => HERO/HEADER COMPONENT -->
### Draggable Slider 
- [ ] Draggable slider <!-- How to Create a Draggable slider-->
### Circle with rotating text and hover animation
- [ ] Recreate the circle with rotating text and hover animation.
<!-- TO-DO => /HOME COMPONENT -->

<!-- TO-DO => create custom currency pipe to change product price according to selected region  -->
<!-- TO-DO => Add Chaotic sticker Sprinkle -->
<!-- TO-DO => organize SVGs -->

### Change image on hover

Hover effects - Change image on hover

<!-- TO-DO => #SHOP COMPONENT -->
<!-- TO-DO => /ABOUT COMPONENT -->
<!-- TO-DO => /SEARCH COMPONENT -->
### Content filtering
- [ ] Content filtering
<!-- TO-DO => /CART COMPONENT 

Add a shopping cart: Implement a shopping cart feature that allows users to add products to their cart and view their cart on the homepage.

-->
<!-- TO-DO => Implement checkout: Implement a checkout feature that allows users to enter their payment and shipping information and complete their purchase. -->
<!-- TO-DO => footer ticker tape -->
### User Reviews/Ratings (Bonus)
UI Inspo from [Dribble](https://dribbble.com/shots/21512658-Reviews-and-ratings) ![https://dribbble.com/shots/21512658-Reviews-and-ratings](/src/assets/screens/dribble-ratings-inspo.png)

### Angular in-memory-web-api
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
### Stateless Observable Service 
created a stateless observable service `product.service.ts` to store as little state as possible on the client and instead fetch the data from the server when needed
### JSON server to store and retrieve data
<!-- Connect to a backend using JSON serverthat provides data about your products. This can be done using HTTP requests or a service. -->

## Continued development
## Useful resources
<!-- List any external resources or libraries used in the project, as well as any contributors or collaborators. -->
- [ Angular CurrencyPipe](https://angular.io/api/common/CurrencyPipe)
- [Angular in-memory-web-api](https://angular.io/tutorial/tour-of-heroes/toh-pt6)
-  [angular.io](https://angular.io/tutorial/tour-of-heroes/toh-pt2)
- [phosphor icons](https://phosphoricons.com/)
- [Auto-placement in grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [:nth-child() pseudo-class](https://www.w3.org/TR/selectors/#nth-child-pseudo)
- [CSS Grid Generator](https://cssgrid-generator.netlify.app/)
## Author

- Website - [Chanda Abdul](https://www.Chandabdul.dev)
- GitHub - [github.com/Chanda-Abdul](https://github.com/Chanda-Abdul)




