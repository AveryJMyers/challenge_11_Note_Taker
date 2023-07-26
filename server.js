const fs = require('fs');
const express = require('express');
const path = require('path');
const uuid = require('uuid');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(expresss.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

