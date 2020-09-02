const express = require('express');
const router = express();

const Product = require('../../../models/Product');

router.post('/api/deleteProduct', async (req,res) => {

    const productId = req.body.productId;

    try {

        await Product.findByIdAndDelete({ productId });

        return res.redirect('/admin/products');

    } catch(e) {
        console.log(e);
    }

});

module.exports = router;