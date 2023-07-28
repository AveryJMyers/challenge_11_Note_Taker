const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

router.get('/notes', (req, res) => {
  try {
    const notesData = fs.readFileSync(path.join(__dirname, '../../db/db.json'));
    const notes = JSON.parse(notesData);
    res.json(notes);
  } catch (err) {
    console.error('Error reading notes data:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/notes', (req, res) => {
  try {
    const notesData = fs.readFileSync(path.join(__dirname, '../../db/db.json'));
    const notes = JSON.parse(notesData);
    const newNote = {
      id: uuid.v4(),
      title: req.body.title,
      text: req.body.text,
    };
    notes.push(newNote);
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes));

    res.json({ message: 'Note added successfully!', note: newNote });
  } catch (err) {
    console.error('Error saving note:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
