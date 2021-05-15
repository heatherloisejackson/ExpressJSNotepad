const fs = require("fs");
const uniqid = require("uniqid");
const noteData = require("../db/db.json");

module.exports = (app) => {
  // read the db.json file and return all saved notes as JSON
  app.get("/api/notes", (req, res) => res.json(noteData));

  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    // create a unique ID for each note using the uniqid library
    newNote.id = uniqid();

    noteData.push(newNote);

    // convert user's note into JSON and update db.json file
    fs.writeFile("./db/db.json", JSON.stringify(noteData), (err) =>
      err ? console.error(err) : res.json(newNote)
    );

  });
};
