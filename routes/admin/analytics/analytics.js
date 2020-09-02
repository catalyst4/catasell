const express = require('express');
const router = express();

router.get('/admin/analytics', (req,res) => {

    return res.render('admin/analytics/analytics');

});

module.exports = router;