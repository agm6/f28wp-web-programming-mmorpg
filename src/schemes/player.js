const mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String,
    is_online: Boolean,
    meta: {
      bullets_shot: Number,
      support_score: Number,
      dps_score: Number,
      tank_score: Number
    }
  });

return { playerSchema };