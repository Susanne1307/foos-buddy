const dotenv = require('dotenv');
dotenv.config();
process.env.MONGO_URL;

const { MongoClient } = require('mongodb');

const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const client = new MongoClient(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect().then(async () => {
  console.log('database connected 😍');
  const db = client.db('FoosBuddy');
  const users = await db.collection('users');
  const oneUser = await users.findOne();
  console.log('Found user', oneUser);
  await users.insertOne({ firstName: 'Susanne' });
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port} 🎉`);
  });
});
