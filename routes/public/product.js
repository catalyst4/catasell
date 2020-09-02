const express = require('express');
const router = express();

const Product = require('../../models/Product');

router.get('/products/:productId', async (req,res) => {

    const productId = req.params.productId;

    try {

        const product = await Product.findOne({ productId });

        if(product) {
           return res.render('public/product', { product }); 
        } else {
            return res.redirect('/');
        }

    } catch(e) {
        console.log(e);
    }

});

module.exports = router;