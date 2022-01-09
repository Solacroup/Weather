require('dotenv').config();
//pour définir chemin par défaut
const path = require("path");

//importer express
const express = require("express");
const app = express();

//importer geocode
const geoCode = require('../utils/geoCode.js');

//constante de chemin par défaut
const publicDirectoryPath = path.join(__dirname, "../public");
//utiliser le chemin 
app.use(express.static(publicDirectoryPath));

// définir moteur de templates,  ici ejs
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Nissim",
  });
});

//requête : chemin + request, response
app.get("/temperature/:city", async (req, res) => {
  console.log(req.params)
  console.log(req.params.city);
  const city = req.params.city;
  const temperature = await geoCode(city) //await pour attendre la réponse, tjs avec async
  console.log(temperature)
  res.render('temperature', {
    temperature,
    city
  })
});

//définir port
const port = 5000;

app.listen(port, () => console.log(`Listenning on port ${port}...`));
