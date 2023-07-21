const express = require("express");
const port = 3000;
const app = express();

//permet de servir les fichiers static
app.use("/style", express.static("style"));

//utilisation du moteur de template
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/movies", (req, res) => {
  res.send(`Vos films bientot disponible`);
});

//attention a l ordre des routes, get.id est plus specialise et viendra avant get/add

app.get("/movies/add", (req, res) => {
  res.send("ajout d un formulaire");
});

app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  res.send(`film numero ${id}`);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  `app started at port ${port}`;
});
