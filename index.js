const dotenv = require('dotenv');
dotenv.config();
process.env.MONGO_URL;
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./lib/routes/auth');
const postRoute = require('./lib/routes/posts');

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Successfully connected with mongoose 🙂')
);

app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} 🎉`);
});
