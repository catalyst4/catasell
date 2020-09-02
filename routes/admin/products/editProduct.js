const express = require('express');
const router = express();

const Product = require('../../../models/Product');

router.get('/admin/products/:productId', async (req,res) => {

    const productId = req.params.productId;

    const product = await Product.findOne({ productId });

    if(product) {
        return res.render('admin/products/editProduct', { product });    
    }
    
});

router.post('/api/editProduct', async (req,res) => {

    const productId = req.body.productId;
    const { productName, productDescription, productPrice, productDiscountPrice,
        productQty
    } = req.body;

    if(!productName || !productDescription || !productPrice ) {
        // Fields incomplete
        return res.render('admin/product/addProduct');
    }

    try {

        const product = await Product.findById({ productId });

        if(productName != product.productName) {
            product.productName = productName;
        }

        if(productDescription != product.productDescription) {
            product.productDescription = productDescription;
        }

        if(productPrice != product.productPrice) {
            product.productPrice = productPrice;
        }

        if(productDiscountPrice) {
            if(productDiscountPrice != product.productDiscountPrice) {
                if(productDiscountPrice < productPrice) {
                    product.productDiscountPrice = productDiscountPrice;    
                } else {
                    // Discount price should be less than price
                    return res.render('admin/product/editProduct');
                }
            }
        }

        if(productQty) {
            if(productQty != product.productQty) {
                if(productQty > 0) {
                    product.productQty = productQty    
                } else {
                    // Qty must be greater than zero
                    return res.render('admin/product/addProduct');
                }
            }
        }

        await product.save();

        return res.redirect('/admin/products');

    } catch(e) {
        console.log(e);
    }

});

module.exports = router;