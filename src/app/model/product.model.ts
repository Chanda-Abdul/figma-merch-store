export interface Product {
  id: number;
  new?: boolean;
  featured?: boolean;
  name: string;
  price: number;
  img: string[];
  description: string;
  features?: string[];
  tags?: string[];
  sizes?: boolean;
}
