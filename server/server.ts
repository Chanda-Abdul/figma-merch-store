
import * as express from 'express';
import { Application } from "express";
import { getAllProducts, getProductById } from './get-products.route';
import { getAllRatings } from './get-ratings.route';
import { searchProducts } from "./search-products.route";
import { getCart } from './get-cart.route';
import { saveRates } from './save-rates.route';


const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

const cors = require('cors');

app.use(cors({ origin: true }));

app.route('/api/products').get(getAllProducts);

// app.route('/api/rates').get(saveRates);

app.route('/api/product/:id').get(getProductById);

app.route('/api/products/:searchTerm').get(searchProducts);

app.route('/api/cart').get(getCart);

// app.route('/api/product/:name').get(getProductByName);

app.route('/api/rating/:id').get(getAllRatings);



const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
});



