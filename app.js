const express = require("express");
const port = 3000;
const app = express();
const bodyParser = require("body-parser");

//permet de servir les fichiers static
app.use("/style", express.static("style"));
//on choisi le middleware du bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
//utilisation du moteur de template
app.set("views", "./views");
app.set("view engine", "ejs");

//attention a l ordre des routes, get.id est plus specialise et viendra avant get/add

/*---------------------------------------------------------
------------------------ POST -----------------------------
-----------------------------------------------------------*/
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post("/movies", urlencodedParser, (req, res) => {
  //ne pas oublier body-parser
  console.log(req.body);
  res.sendStatus(201);
});

/*---------------------------------------------------------
------------------------ GET -----------------------------
-----------------------------------------------------------*/

app.get("/movies", (req, res) => {
  const title = "films francais";
  const frenchMovies = [
    {
      title: "la 7 eme confirmmpagnie",
    },
    {
      title: "la ligne verte",
    },
    { title: "GhostWrtitter" },
    {
      title: "la 7 eme confirmmpagnie au clair de lune",
    },
  ];
  res.render("movies", { movies: frenchMovies, title: title });
});

app.get("/movies/add", (req, res) => {
  res.send("ajout d un formulaire");
});

app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  res.render("movies-details", { movieid: id });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  `app started at port ${port}`;
});
