const express = require('express');
const router = express();

router.get('/admin/discounts', (req,res) => {

    return res.render('admin/discounts/listDiscounts');

});

module.exports = router;