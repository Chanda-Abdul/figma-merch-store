


import { Request, Response } from 'express';
import { PRODUCTS } from "./db-data";
import { setTimeout } from "timers";



export function searchProducts(req: Request, res: Response) {

    const queryParams = req.query as any;

    const productId = queryParams.productId,
        filter = queryParams.filter || '',
        sortOrder = queryParams.sortOrder || 'asc',
        pageNumber = parseInt(queryParams.pageNumber) || 0,
        pageSize = parseInt(queryParams.pageSize) || 3;

    let Products;

    if (productId) {
        Products = Object.values(PRODUCTS).filter(product => product.id == productId).sort((l1, l2) => l1.id - l2.id);
    }
    else {
        Products = Object.values(PRODUCTS);
    }

    if (filter) {
        Products = Products.filter(product => product.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
    }

    if (sortOrder == "desc") {
        Products = Products.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const ProductsPage = Products.slice(initialPos, initialPos + pageSize);

    setTimeout(() => {
        res.status(200).json({ payload: ProductsPage });
    }, 1000);


}
