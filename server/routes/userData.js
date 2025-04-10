const express = require('express');
const router = express.Router();
const UserData = require('../models/UserData');

router.get('/:userId', async (req, res) => {
  try {
    const data = await UserData.findOne({ userId: req.params.userId });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data', error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { userId, height, weight } = req.body;
  try {
    const existing = await UserData.findOne({ userId });
    if (existing) {
      existing.height = height;
      existing.weight = weight;
      existing.updatedAt = Date.now();
      await existing.save();
      res.status(200).json({ message: 'Data updated successfully' });
    } else {
      const newData = new UserData({ userId, height, weight });
      await newData.save();
      res.status(201).json({ message: 'Data saved successfully' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
