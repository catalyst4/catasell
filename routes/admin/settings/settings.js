const express = require('express');
const router = express();

router.get('/admin/settings', (req,res) => {

    return res.render('admin/settings/settings');

});

module.exports = router;