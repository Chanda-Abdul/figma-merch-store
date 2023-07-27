import { Request, Response } from 'express';
import { PRODUCTS } from './data/products-db-data';


export function getAllProducts(req: Request, res: Response) {

  /**
   * to simulate a loading Error
   * 
   * console.log("ERROR loading products!");
   * res.status(500).json({message: 'error occurred.'});
   * return;
   * 
   */

  // setTimeout(() => {

  res.status(200).json({ payload: Object.values(PRODUCTS) });

  // }, 1500);

}


export function getProductById(req: Request, res: Response) {

  const productId = req.params["id"];

  const products: any = PRODUCTS;

  const product = products.find((product: any) => product.id == productId);

  res.status(200).json(product);
}
