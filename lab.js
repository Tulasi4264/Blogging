const express = require('express');
const app = express();

const myMiddleware = (req, res, next) => {
  console.log('This is my middleware!');
  next();
};


app.use(myMiddleware);


app.get('/', (req, res) => {
  res.send('Hello World!');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
