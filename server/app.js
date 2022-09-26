const express = require("express");
const cors = require("cors");

const beasts = require("./beasts");
const e = require("express");

// Make a basic server
const app = express();
// Allow requests from other origins
app.use(cors())
// Tell Express to always read the body of POST requests
app.use(express.json())

// Set up the server routes
app.get("/", (req, res) => {
    res.send("Welcome to the Bestiary!");
});

app.get("/beasts", (req, res) => {
    res.send(beasts);
});

app.get("/beasts/:id", (req, res) => {

    if (0 <= req.params.id && req.params.id < beasts.length) {
        const filtered = beasts.filter(b => b.id == req.params.id);
        res.send(filtered[0]);
    } else {
        res.status(404).send({ error: "You messed up!" })
    }
})

app.post("/beasts", (req, res) => {

    // Grab the beast data
    const newBeast = req.body; 

    // Select an ID for the beast
    newBeast["id"] = beasts.length;

    // Add it to the list of beasts
    beasts.push(newBeast);

    // Return a message saying it worked
    res.status(201).send(newBeast);
})

module.exports = app;