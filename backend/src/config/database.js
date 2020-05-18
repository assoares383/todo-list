const mongoose = require("mongoose");

const url =
  "mongodb+srv://<user>:<password>@db-m4gev.mongodb.net/db?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
