const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const bodyParser = require('body-parser');

const initiateMongo = require('./config/db');
initiateMongo();

// View handling
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, '/')))

// Public Routes
app.use(require('./routes/public/index'));
app.use(require('./routes/public/product'));
app.use(require('./routes/public/listProducts'));
// Admin Routes
app.use(require('./routes/admin/dashboard'));
app.use(require('./routes/admin/products/addProduct'));
app.use(require('./routes/admin/products/deleteProduct'));
app.use(require('./routes/admin/products/editProduct'));
app.use(require('./routes/admin/products/listProducts'));
app.use(require('./routes/admin/orders/listOrders'));
app.use(require('./routes/admin/analytics/analytics'));
app.use(require('./routes/admin/discounts/listDiscounts'));
app.use(require('./routes/admin/settings/settings'));

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));