const fs = require('fs');
const express = require('express');
const path = require('path');


app.use("/api", apiRouter)   
app.use("/html", htmlRouter)

const apiRouter = require("./public/routes/apiRoutes")
const htmlRouter = require("./public/routes/htmlRoutes")



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})






