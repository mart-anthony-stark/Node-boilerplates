import { Application } from "express";

const init = (app: Application) => {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

export default init;
