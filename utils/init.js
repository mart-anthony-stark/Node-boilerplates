const mongoose = require("mongoose");

const init = async (app) => {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, (e) => {
    if (e) return console.log(e);
    console.log(`Server running on port ${PORT}`);
  });

  await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to database");
};

module.exports = init;
