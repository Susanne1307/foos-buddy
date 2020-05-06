const dotenv = require('dotenv');
dotenv.config();
process.env.MONGO_URL;
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const authRoutes = require('./lib/routes/auth');
const postRoutes = require('./lib/routes/posts');
const dtfbRoutes = require('./lib/routes/dtfb');

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => console.log('Successfully connected with mongoose 🙂')
);

app.use(express.json());

app.use('/api/users', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/dtfb', dtfbRoutes);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} 🎉`);
});
