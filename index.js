const express = require("express");
const app = express();

app.get("/", firstroute);
const NOTES = [
  {
    id: 1,
    title: "first note",
    text: "this is the text of my first note",
  },
  {
    id: 2,
    title: "second note",
    text: "this is the text of my second note",
  },
  {
    id: 3,
    title: "third note",
    text: "this is the text of my third note",
  },
];

function firstroute(req, res) {
  app.send("Hello world");
}
app.get("/second", (req, res) => {
  res.send(NOTES);
});
app.get("/second/:id", (req, res) => {
  const id = req.params.id;
  for (i = 0; i < NOTES.length; i++) {
    if (id == NOTES[i].id) {
      res.send(NOTES[i]);
    }
  }
});
app.listen(3000);
