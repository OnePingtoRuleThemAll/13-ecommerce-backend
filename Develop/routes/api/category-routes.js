const router = require('express').Router();
const { Category, Product } = require('../../models');

// get all categories and their associated products
router.get('/', (req, res) => {
  try {
  // find all categories, indcluding their associated products
    const categories = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categories);
  } catch (err) {
    // handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: 'not found!' });
  }
});

// get a single category by id, including associated products
router.get('/:id', (req, res) => {
  try {
    // find the category with the matching id, including its associated products
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });

    //if category is not found, send a 404 status with custom message
    if (!category) {
      res.status(404).json({ message: 'id not found' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    // handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: 'not found!' });
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    //create a new category using the data in the request body
    const newCatogory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    // handle errors by sending a 400 status with a custom message
    res.status(400).json({ message: 'creation failed' });
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    // update the category with the matching id using the data in the request body
    const updated = await Category.update(req.body, { where: { id: req.params.id } });

    // if the cateogory is not found, send a 404 status with a custom message
    //otherwise, return the updated data
    !updated[0] ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(updated);
  } catch (err) {
    //handle erros by sending a 500 status with a custom message
    res.status(500).json({ message: 'update failed' });
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    //delete the category with the matching id
    const deleted = await Category.destroy({ where: { id: req.params.id } });

    // if the category is not found, send a 404 status with a custom message
    //otherwise, return the deleted data
    !deleted ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(deleted);
  } // if there is an error, send a 500 status with the error
  catch (err) {
    res.status(500).json(err);
  }
});

// export the router
module.exports = router;
