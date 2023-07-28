// dependencies 
const fs = require('fs');
const express = require('express');
const path = require('path');

const apiRouter = require("./public/routes/apiRoutes");
const htmlRouter = require("./public/routes/htmlRoutes");
const app = express();
const PORT = process.env.PORT || 3000;
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use("/api", apiRouter);
app.use("/html", htmlRouter);
// HTML routes
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname,'public', 'routes', 'index.html'));
   console.log('get /')
 });

 app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'routes', 'index.html'));
  console.log('get html')
});


app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'routes', 'notes.html'));
  console.log('get /notes')
});
// live server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
