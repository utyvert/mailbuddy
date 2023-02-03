const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('../public'));


app.get('/', (req, res) => {
  res.send('Welcome to Express!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
