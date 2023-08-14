import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'filterByCategory',
  pure: false,
})

export class FilterByCategoryPipe implements PipeTransform {

  transform(products: Product[], category?: string) {
    if (category) {
      return products.filter(product => product.tags[0] === category);

    } else {
      return products
    }
  }

}
