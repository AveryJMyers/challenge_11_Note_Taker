const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname, './routes/index.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './routes/notes.html'));
});

module.exports = router;
