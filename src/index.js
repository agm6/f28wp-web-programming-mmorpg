/* eslint-disable no-console */
const express = require('express');
const playerSchema = require('./schemes/player');

const app = express();

const mongoose = require('mongoose');

var mongo_db = new mongoose.Mongoose();
mongo_db.connect('mongodb://localhost/mmo', { useNewUrlParser: true });

var db = mongo_db.connection;

// Setup the schemas
const Player = mongo_db.model('Player', playerSchema);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  // connected to the database

  const joergen = new Player({
    name: "Joergen",
    username: "joergen69",
    password: "password-nohash",
    email: "zaxquit@protonmail.com",
    is_online: false
  });

  await joergen.save();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/players_list', (req, res) => {
  Player.find({}, (data) => {
    console.log(data);
  })
});

app.listen(3000, () => console.log('App is listening on port 3000.'));
