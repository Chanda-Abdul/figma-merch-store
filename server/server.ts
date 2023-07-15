
import * as express from 'express';
import { Application } from "express";
import { getAllProducts, getProductById } from './get-products.route';
import { getAllRatings } from './get-ratings.route';
import { searchProducts } from "./search-products.route";


const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

const cors = require('cors');

app.use(cors({ origin: true }));

app.route('/api/products').get(getAllProducts);

app.route('/api/product/:id').get(getProductById);

// app.route('/api/product/:name').get(getProductByName);

app.route('/api/rating/:id').get(getAllRatings);

app.route('/api/products/:searchTerm').get(searchProducts);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
});



