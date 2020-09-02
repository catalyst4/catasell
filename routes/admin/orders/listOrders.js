const express = require('express');
const router = express();

router.get('/admin/orders', (req,res) => {

    return res.render('admin/orders/listOrders');

});

module.exports = router;