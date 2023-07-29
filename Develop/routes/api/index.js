// require the express module and create a new router instance
const router = require('express').Router();
// require the category, product, and tag route modules
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
// use the category, product, and tag route modules for their respective endpoints
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
// export the router instance for use in other modules
module.exports = router;
