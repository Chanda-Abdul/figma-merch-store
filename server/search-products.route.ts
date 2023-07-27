import { Request, Response } from 'express';

import { setTimeout } from "timers";
import { PRODUCTS } from './data/products-db-data';

export function searchProducts(req: Request, res: Response) {

    const queryParams = req.query as any;

    const productId = queryParams.productId,
        search = queryParams.filter || '',
        filter = queryParams.filter || '',
        sortOrder = queryParams.sortOrder || 'asc',
        pageNumber = parseInt(queryParams.pageNumber) || 0,
        pageSize = parseInt(queryParams.pageSize) || 25;

    let Products;

    if (productId) {
        Products = Object.values(PRODUCTS)
            .filter(product => product.id == productId).sort((l1, l2) => l1.id - l2.id);
    }
    else {
        Products = Object.values(PRODUCTS);
    }

    if (search) {
        Products = Object.values(PRODUCTS)
            .filter(product => product
                .description.trim()
                // TO-DO => only searches within description?
                .toLowerCase().search(search.toLowerCase()) >= 0);
    }
    if (filter) {
        Products = Object.values(PRODUCTS)
            .filter(product => product.tags[0] == filter);
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
