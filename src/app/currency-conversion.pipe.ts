import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion'
})
export class CurrencyConversionPipe implements PipeTransform {

  transform(price: number,    
    currencyCode: string = 'USD',
  // display:
  //     | 'code'
  //     | 'symbol'
  //     | 'symbol-narrow'
  //     | string
  //     | boolean = 'symbol',
  // digitsInfo: string = '3.0-0',
  // locale: string = 'us'
  ):  string | number  {
    // Conversion logic based on the selected country
    // return formatCurrency(
    //   price,
    //   locale,
    //   getCurrencySymbol(currencyCode, 'wide'),
    //   currencyCode,
    //   digitsInfo,
    // );
    switch (currencyCode) {
      // USA
      case 'store':
        return price;
      // Canada
      case 'store-ca':
        return price * 1.3;
      // UK
      case 'store-uk':
        return price * 0.75;
      // Japan
      case 'store-jp':
        return price * 110;
      default:
        return price;
    }
  }

}
