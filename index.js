const dotenv = require('dotenv');
dotenv.config();
process.env.MONGO_URL;
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const authRoute = require('./lib/routes/auth');
const postRoute = require('./lib/routes/posts');

console.log(process.env.MONGO_URL);
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Successfully connected with mongoose 🙂')
);

app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} 🎉`);
});
