// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const apiRouter = require('./routes/routes'); // adjust the path as necessary

app.use(apiRouter);
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

module.exports=app;