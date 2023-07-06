import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  bkgrndColor!: string;
  logoColor!: string;

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

  tickerTapeItems: any
    // : Array<{ word?: string } | { shape?: string }>
    
    = [
      { word: "FIGMA'S" },
      { shape: `<svg class='snippet--ticker-shape' width='23' height='18' viewBox='0 0 23 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.662109 17.3626V6.21266L6.23707 0.637695L15.9933 6.21266L22.962 0.637695V11.7876L15.9933 17.3626L6.23707 11.7876L0.662109 17.3626Z' fill='white'></path></svg>` },
      { word: 'MARVELOUSLY' }, { shape: '' },
      { word: 'CONSIDERED' }, { shape: '' },
      { word: 'COLLECTION' }, { shape: '' },
      { word: 'OF' }, { shape: '' },
      { word: 'OBJECTS' }, { shape: '' },
      { word: 'FOR' }, { shape: '' },
      { word: 'OUR' }, { shape: '' },
      { word: 'TIME' }, { shape: '' },
      { word: 'ON' }, { shape: '' },

    ]

  ngOnInit(): void {
    this.setColor();
  }

  setColor() {
    function getrandomColor() {
      const colors = [
        'hsl(14, 89%, 53%)',
        'hsl(148, 84%, 36%)',
        'hsl(47, 100%, 50%) ',
        'hsl(252, 100%, 86%)'];

      return colors[(Math.floor(
        Math.random() * colors.length))];
    }
    this.bkgrndColor = getrandomColor();
    this.logoColor = getrandomColor();
  }

}
