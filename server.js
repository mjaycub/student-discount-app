const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");
const low = require("lowdb");
const lodashId = require("lodash-id");
const FileSync = require("lowdb/adapters/FileSync");

// Express Configuration
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname + "/build"));

// Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** --- DATABASE HANDLING --- **/
const adapter = new FileSync("db.json");
const db = low(adapter);
db._.mixin(lodashId);

// Set some default college and user values to work off for now
db.defaults({
  colleges: [
    {
      id: 1,
      name: "yale"
    },
    {
      id: 2,
      name: "harvard"
    },
    {
      id: 3,
      name: "usc"
    }
  ],
  students: [
    {
      id: 1,
      name: "Mark Jacob",
      collegeId: 1,
      email: "mj@tcd.ie"
    },
    {
      id: 2,
      name: "John Smith",
      collegeId: 3,
      email: "johnsmith@usc.com"
    }
  ]
}).write();

/**
 * Insert a new college into the database.
 * @param {number} pageNumber - The page number for the next user request
 * @returns {string} id - id of college in table
 */
insertNewCollege = collegeName => {
  if (collegeName) {
    const newEntry = db
      .get("colleges")
      .insert({ name: collegeName })
      .write();
    console.log(`New college inserted into db! Name: ${collegeName}, ID: ${newEntry.id}`);
  } else {
    return -1;
  }
};

/**
 * Insert a new college into the database.
 * @param {number} pageNumber - The page number for the next user request
 * @returns {string} id - id of college in table
 */
insertNewStudent = (studentName, studentEmail, collegeId) => {
  if (studentName && studentEmail && collegeId) {
    const newEntry = db
      .get("students")
      .insert({ name: studentName, email: studentEmail, collegeId: collegeId })
      .write();
      console.log(`New student inserted into db! Name: ${studentName}, ID: ${newEntry.id}`);
  } else {
    return -1;
  }
};


/** --- API ENDPOINTS ---  **/
/**
 * GET colleges
 */
app.get("/api/colleges", (req, res) => {
  const colleges = db.get("colleges").value();
  res.send(colleges);
});

/**
 * GET students
 */
app.get("/api/students", (req, res) => {
  const students = db.get("students").value();

  res.send(students);
});

/**
 * POST colleges
 */
app.post("/api/colleges", function(req, res) {
  const collegeName = req.body.name;

  // insert into database
  insertNewCollege("markstest");

  res.send("POST request to the homepage");
});

/**
 * POST students
 */
app.post("/api/students", function(req, res) {
  const student = req.body.name;

  // insert into db
  insertNewStudent("Mark Jacob", "mj@tcd.ie", 1);

  res.send("POST request to the student db");
});

/** --- ENDPOINT HANDLING --- **/
app.get("/", (req, res) => {
  const str = "build/index.html";
  res.sendFile(path.join(__dirname + "/" + str));
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
