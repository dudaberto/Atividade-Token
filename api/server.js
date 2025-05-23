require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.use(express.json());

const loginRoutes = require('./src/routes/login');
const postsRoutes = require('./src/routes/posts');

app.use(loginRoutes);
app.use(postsRoutes);

app.listen(port, () => {
    console.log('listening on ' + port);
});
