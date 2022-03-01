import { Application } from "express";

const init = (app: Application) => {
  const PORT: Number = parseInt(`${process.env.PORT}`, 10) || 8080;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

export default init;
