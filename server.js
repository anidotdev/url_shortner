const express = require('express')
const app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs');

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
