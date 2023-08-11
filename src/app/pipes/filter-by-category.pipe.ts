import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'filterByCategory',
  pure: false,
})
export class FilterByCategoryPipe implements PipeTransform {


  transform(products: Product[], tag:string) {

      console.log('Called transform()');

      return products.filter(product => product.tags[0] === tag);
  }

}
