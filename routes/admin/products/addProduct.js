const express = require('express');
const router = express();

const Product = require('../../../models/Product');

router.get('/admin/products/add', async (req,res) => {

    return res.render('admin/products/addProduct')
    
});

//
// ADD IMAGE SHENANIGANS
//

router.post('/api/addProduct', async (req,res) => {

    const { productName, productDescription, productPrice, salePrice,
        productQty
    } = req.body;

    if(!productName || !productDescription || !productPrice ) {
        // Fields incomplete
        return res.render('admin/products/addProduct');
    }

    const productId = Math.floor(Math.random() * (999999999 - 100000000)) + 100000000;
    
    try {

        const product = new Product({ productName, productId, productDescription, productPrice });
        
        if(salePrice) {
            if(salePrice < productPrice) {
                product.salePrice = salePrice;    
            } else {
                // Discount price should be less than price
                return res.render('admin/products/addProduct');
            }
        }

        if(productQty) {
            if(productQty > 0) {
                product.productQty = productQty    
            } else {
                // Qty must be greater than zero
                return res.render('admin/products/addProduct');
            }
        }

        await product.save();

        return res.redirect('admin/products');

    } catch(e) {
        console.log(e);
    }

});

module.exports = router