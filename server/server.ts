
import * as express from 'express';
import { Application } from "express";
import { getAllProducts, getProductById } from './get-products.route';
// import {getAllProducts, getProductById} from "./get-Products.route";
// import {searchProducts} from "./search-Products.route";
// import {saveProduct} from './save-Product.route';
// import {loginUser} from './login.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

const cors = require('cors');

app.use(cors({ origin: true }));

app.route('/api/products').get(getAllProducts);

app.route('/api/product/:id').get(getProductById);

// app.route('/api/products).get(searchProducts);

// app.route('/api/login').post(loginUser);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
});



