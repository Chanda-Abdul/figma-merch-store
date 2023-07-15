export interface Product {
  id: number;
  new: boolean;
  featured: boolean;
  featuredCarouselImg?: string;
  name: string;
  price: number;
  soldOut?: boolean;
  productPhotos: string[];
  hoverPatternImg?: string;
  hoverProductImg?: string;
  link?: string;
  description: string;
  features?: string[];
  tags?: string[];
  sizes?: boolean;
}

export function sortProductsByFeatured(product1: any, product2: any) {
  return product2.featured - product1.featured;
}

export function filterToFeaturedProducts(products: any) {
  let product = products.filter((p: any) =>  {return p.featured == true})
  return product;
}
export function filterByProductTag(products: any, tag: string) {
  let product = products.filter((p: any) =>  {return p.tags[0] == tag})
  return product;
}
export function sortProductsByDes(product1: any, product2: any) {
  return product2.id - product1.id;
}

export function sortProductsByNew(product1: any, product2: any) {
  return product2.new - product1.new;
}

export function sortProductsByAvailable(product1: any, product2: any) {
  return product1.soldOut - product2.soldOut;
}
