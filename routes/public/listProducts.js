const express = require('express');
const router = express();

const Product = require('../../models/Product');

router.get('/products', async (req,res) => {

    await Product.find((err,products) => {
        err => console.log(err);
        let noProducts = false;
        if(products.length < 1) {
            noProducts = true;
        }
        return res.render('public/listProducts', { products, noProducts });
    });

});

module.exports = router;