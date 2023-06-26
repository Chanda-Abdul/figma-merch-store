export interface Product {
  id: number;
  new: boolean;
  featured: boolean;
  name: string;
  price: number;
  img: string[];
  backdropImg?: string;
  productImg?: string;
  link?: string;
  description: string;
  features?: string[];
  tags?: string[];
  sizes?: boolean;
}

export function sortProductsByFeatured(product1: any, product2: any) {
  return product2.featured - product1.featured;
}

export function sortProductsByNew(product1: any, product2: any) {
  return product2.new - product1.new;
}
