const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Products not found!' });
  }
});

// get one product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });
    !product
      ? res.status(404).json({ message: "Product not found!" })
      : res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "Product not found!" });
  }
});

// create new product
router.post('/', (req, res) => {
    Product.create(req.body)
      .then((product) => {
        if (req.body.tagIds.length) {
          const productTagIds = req.body.tagIds.map((tag_id) => {
            return {
              product_id: product.id,
              tag_id,
            };
          });
          return ProductTag.bulkCreate(productTagIds);
        }
        res.status(200).json(product);
      })
      .then((productTagIds) => res.status(200).json(productTagIds))
      .catch((err) => {
        res.status(400).json({ message: "Creation failed", error: err });
      });
});

// update product
router.put('/:id', async (req, res) => {
  try {
    await Product.update(req.body, { where: { id: req.params.id } });

    //check if req.body.tags exist and has some length
    if (req.body.tags && req.body.tags.length > 0) {
      //retrieve product tags and their id's
      const productTags = await ProductTag.findAll({ where: { product_id: req.params.id } });
      const productTagIds = productTags.map(({ tag_id }) => tag_id);

      //filter new product tags and create new ones
      const newProductTags = req.body.tags
      .filter((tag_id) => !productTagIds.includes(tag_id))
      .map((tag_id) => {
        return {
          product_id: req.params.id,
          tag_id,
        };
      });

      //filter prodcuted to remove deleted items
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tags.includes(tag_id))
        .map(({ id }) => id);

      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }

    // respond with updated product
  const product = await Product.findByPk(req.params.id, { include: [{ model: Tag }] });
  return res.json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
  try {
    //delete the product with the matching id
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    // if product is not found, send a 404 status with message
    //otheriwse, return the deleted data
    !deleted
    ?  res.status(404).json({ message: "id not found" })
    : res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ message: "Product not deleted", error: err });
  }
});

module.exports = router;
