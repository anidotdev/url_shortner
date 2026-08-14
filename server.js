require('dotenv').config()
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const mongoose = require('mongoose')
const express = require('express')
const app = express()


app.use(express.static('public'));
app.set('view engine', 'ejs');
console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error: ", err))

app.get('/', async (req, res) => {
  const urls = [];

  res.render('index', {
    shortUrl: null,
    urls: urls
  });
});

app.listen(5000, () => {
  console.log("Server listening on port 5000.")
})
