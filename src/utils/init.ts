import { Application } from "express";
import mongoose from "mongoose";

const init = async (app: Application) => {
  const PORT: Number = parseInt(`${process.env.PORT}`, 10) || 8080;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  await mongoose.connect(`${process.env.DB_URI}`, {
    keepAlive: true,
  });
  console.log("Connected to database");
};

export default init;
