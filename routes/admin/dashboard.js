const express = require('express');
const router = express();

router.get('/admin', (req,res) => {

    return res.render('admin/dashboard');

})

module.exports = router;