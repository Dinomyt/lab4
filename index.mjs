import express from 'express';
import fetch from 'node-fetch';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const planets = require('./lib/solarSystem.js');

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', async (req, res) => {
    const nasaUrl =
        "https://api.nasa.gov/planetary/apod?api_key=9mUzIkhlZCZaOoMfspg7jMmwZCZ4LiRHtkgkambD&date=2024-11-14";

    const response = await fetch(nasaUrl);
    const data = await response.json();

    res.render("index", {
        title: data.title,
        explanation: data.explanation,
        image: data.url,
    });
});

app.get('/mercury', (req, res) => {
    const mercury = planets.getMercury();
    res.render("planet", { planet: mercury, name: "Mercury" });
});

app.get('/venus', (req, res) => {
    const venus = planets.getVenus();
    res.render("planet", { planet: venus, name: "Venus" });
});

app.get('/earth', (req, res) => {
    const earth = planets.getEarth();
    res.render("planet", { planet: earth, name: "Earth" });
});

app.get('/mars', (req, res) => {
    const mars = planets.getMars();
    res.render("planet", { planet: mars, name: "Mars" });
});

app.get('/jupiter', (req, res) => {
    const jupiter = planets.getJupiter();
    res.render("planet", { planet: jupiter, name: "Jupiter" });
});

app.get('/saturn', (req, res) => {
    const saturn = planets.getSaturn();
    res.render("planet", { planet: saturn, name: "Saturn" });
});

app.get('/uranus', (req, res) => {
    const uranus = planets.getUranus();
    res.render("planet", { planet: uranus, name: "Uranus" });
});

app.get('/neptune', (req, res) => {
    const neptune = planets.getNeptune();
    res.render("planet", { planet: neptune, name: "Neptune" });
});

app.get('/pluto', (req, res) => {
    const pluto = planets.getPluto();
    res.render("planet", { planet: pluto, name: "Pluto" });
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

