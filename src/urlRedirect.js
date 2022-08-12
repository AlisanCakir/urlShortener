const express = require('express');
const router = express.Router();

const Url = require('./urlModel');

// Redirect to long/original URL
router.get('/:short', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.short });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No url found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;
