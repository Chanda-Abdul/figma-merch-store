import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  bkgrndColor!: string;
  logo!: string;

  footerLinks: any = {
    legal: [
      { text: 'Privacy & Terms', link: 'privacy-policy' },
      { text: 'Contact Us', link: 'about#contact' }
    ],
    social: [
      { text: 'Figma ↗', link: 'https://figma.com/' },
      { text: 'Twitter', link: 'https://twitter.com/figma' },
      { text: 'Instagram', link: 'https://www.instagram.com/figma' },
      { text: 'Youtube', link: 'https://www.youtube.com/c/Figmadesign' }]
  }

  logoOptions = {
    bio: ['logo-tower-bio',
      'logo-figure-bio',],
    glow: ['logo-rect-glow',
      'logo-layer-glow',
      'logo-circle-glow',],
    lilac: ['logo-rect-lilac',
      'logo-l-lilac',
      'logo-cross-lilac'],
    sunflower: ['logo-arch-sunflower',
      'logo-tetris-sunflower']
  }


  backgroundColorOptions = [
    {
      color: 'bio', colorCode: 'hsl(148, 84%, 36%)',
      logos: [
        ...this.logoOptions.glow, ...this.logoOptions.lilac, ...this.logoOptions.sunflower]
    },
    {
      color: 'glow', colorCode: 'hsl(14, 89%, 53%)',
      logos: [
        ...this.logoOptions.bio, ...this.logoOptions.lilac, ...this.logoOptions.sunflower]
    }
    , {
      color: 'lilac', colorCode: 'hsl(252, 100%, 86%)', logos: [
        ...this.logoOptions.bio, ...this.logoOptions.bio, ...this.logoOptions.sunflower]
    },
    {
      color: 'sunflower', colorCode: 'hsl(47, 100%, 50%) ',
      logos: [
        ...this.logoOptions.bio, ...this.logoOptions.lilac, ...this.logoOptions.bio]
    }]


  tickerTapeItems: any
    // : Array<{ word?: string } | { shape?: string }>

    = [
      { word: "FIGMA'S" }, { shape: '/assets/symbols.svg#squiggle' },
      { word: 'MARVELOUSLY' }, { shape: '/assets/symbols.svg#dough' },
      { word: 'CONSIDERED' }, { shape: '/assets/symbols.svg#square' },
      { word: 'COLLECTION' }, { shape: '/assets/symbols.svg#drop' },
      { word: 'OF' }, { shape: '/assets/symbols.svg#drop-up' },
      { word: 'OBJECTS' }, { shape: '/assets/symbols.svg#dough' },
      { word: 'FOR' }, { shape: '/assets/symbols.svg#diamond' },
      { word: 'OUR' }, { shape: '/assets/symbols.svg#hourglasswhite' },
      { word: 'TIME' }, { shape: '/assets/symbols.svg#dash' },
      { word: 'ON' }, { shape: '/assets/symbols.svg#cylinder' },

    ]

  ngOnInit(): void {
    this.setColors();
  }
 
  constructor(private renderer: Renderer2){ }
 
   scrollToTop() {
      const target = document.documentElement ;
    
      this.renderer.setProperty(target, 'scrollTop', 0);
    }

  setColors() {
    let random = Math.floor(
      Math.random() * this.backgroundColorOptions.length)

    this.bkgrndColor = this.backgroundColorOptions[random].colorCode
    this.logo = `${'/assets/logos.svg#'}` + this.backgroundColorOptions[random].logos[Math.floor(
      Math.random() * this.backgroundColorOptions[random].logos.length)]

  }
}
