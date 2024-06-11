const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// Or if you want to prepare for the change and set it to `false`
mongoose.set("strictQuery", false);

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
