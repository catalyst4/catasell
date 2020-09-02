const express = require('express');
const router = express();

const Product = require('../../../models/Product');

router.get('/admin/products', async (req,res) => {

    try {

        await Product.find((err, products) => {
            err => console.log(err);
            let noProducts = products.length <= 0;
            numProducts = products.length;
            return res.render('admin/products/listProducts', { products, noProducts, numProducts });
        });

    } catch(e) {
        console.log(e);
    }

});

module.exports = router;