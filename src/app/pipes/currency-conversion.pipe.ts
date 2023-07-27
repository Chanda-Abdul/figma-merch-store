import { formatCurrency } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion',
  pure: false
})

export class CurrencyConversionPipe implements PipeTransform {
  /**
   * 
   * Formats price as currency based on user selected country
   * 
   * @param amount - price data 1:1 with usd
   * 
   * @param country - checks location on initial load OR sets default location to US dollar, updates currency when USD CAD,JPY,EUR,GBP options are selected
   * 
   * @param rates - current international exchange rates from Currencybeacon API
   * 
   * @returns updated currency amount based on selected country 
   * 
   */


  transform(amount: number, country: string, rates: any): any {
    switch (country) {
      // Canada
      case 'store-ca':
        return formatCurrency(amount * rates['CAD'].exchangeRate, 'en-CA', '$', 'Canadian Dollar', '1.0-0');
      // European Union
      case 'store-eu':
        return formatCurrency(amount * rates['EUR'].exchangeRate, 'en-EU', '€', 'EUR', '1.0-0');
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
