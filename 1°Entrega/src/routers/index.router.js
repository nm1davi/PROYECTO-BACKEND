import { Router } from 'express';
import productModel from '../models/product.model.js';
import { buildResponse } from '../utils.js';
const router = Router();

router.get("",  (req, res) => {
      res.render('index', {title: 'Inicio',})
});

router.get("/products", async (req, res) => {
      const { limit = 10, page = 1, sort, search } = req.query;
      //sort esta asociado al campo price
      //search esta asociado al campo category
      const criteria = {};
      const options = {limit, page};
      if (sort){
        options.sort = { price: sort};
      }
      if(search){
        criteria.category = search;
      }
      const result = await productModel.paginate(criteria, options)
      const data = buildResponse({...result, sort, search}, 'http://localhost:8080')
      res.render('products', {title: 'Productos Admin', ...data})
});

export default router;