const init = (app) => {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, (e) => {
    if (e) return console.log(e);
    console.log(`Server running on port ${PORT}`);
  });
};

module.exports = init;
