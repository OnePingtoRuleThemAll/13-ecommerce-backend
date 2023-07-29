// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//relationships between models

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // the foreign key in the product model
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // the foreign key in the product model
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany( Tag, {
  through: ProductTag, // the intermediate model
  foreignKey: 'product_id', //the foreign key in the product model
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, // the intermediate model
  foreignKey: 'tag_id', // the foreign key inthe tag model
});

//export models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
