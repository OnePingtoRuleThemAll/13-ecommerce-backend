const router = require('express').Router();
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({ message: 'Tags not found!' });
  }
});

// get tag by id
router.get('/:id',async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tagData) {
      res.status(404).json({ message: 'Tag not found with this id' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({ message: 'Tag not found' });
  }
});


// create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json({ message: 'Tag creation failed' });
  }
});


// update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const updated = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    !updated[0]
    ? res.status(404).json({ message: "No tag found with this id" })
    : res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Tag update failed" });
  }
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {    
  try {
    const tag = await Tag.findByPk(req.params.id);
    
    if (!tag) {
      return res.status(404).json({ messgae: 'Tag not found' });
    }

    await Tag.destroy({
      where: { id: req.params.id },
    });

    res.json({ message: 'Tag delete successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
