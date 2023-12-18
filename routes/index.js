var express = require('express');
const app = require('../app');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = require('../models');
var opretbog = require('../models/opretbog');
const axios = require('axios');

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ITbog-genbrugsbutik' });
});

// GET webapplikationer page
router.get("/webapplikationer", function(req, res, next) {
  res.render('webapplikationer', { title: 'Webapplikationer' });
});

// GET computersprog page
router.get("/computersprog", function(req, res, next) {
  res.render('computersprog', { title: 'Computersprog' });
});

// GET computersprog1 page with array
router.get('/computersprog1', function(req, res){
  var books = [
    {
    titel: "Introduction to Java",
    forfatter: "Liang, Daniel Y",
    forlag: "Pearson",
    udgave: "11",
    pris: "250"
    },
    {
    titel: "Python Crash Course",
    forfatter: "Eric Matthes",
    forlag: "No starch",
    udgave: "2",
    pris: "300"
    },
    {
    titel: "C++ Primer",
    forfatter: "Stanley B. Lippman",
    forlag: "Pearson",
    udgave: "5",
    pris: "400"
    },
    {
    titel: "Java in a Nutshell",
    forfatter: "Benjamin J. Evans",
    forlag: "O'Reilly",
    udgave: "7",
    pris: "350"
    }
];

  res.render('computersprog1', { title: 'Computersprog', books: books });
});

// GET computersprog2 page with database
router.get('/webapplikationer1', function(req, res){

  const webapplikations = db.Webapplikation.findAll().then(webapplikations => {
    res.render('webapplikationer1', { title: 'Webapplikationer', webapplikations: webapplikations });
  });
});

// GET opretwebbog page
router.get('/opretwebbog', function(req, res, next){
  res.render('opretwebbog', { title: 'Opret webbog' });
});

// POST submit-bog-info page
router.post('/submit-bog-info', function(req, res, next){
  
  const opretbog = db.Opretbog.create({
    titel: req.body.titel,
    forfatter: req.body.forfatter,
    forlag: req.body.forlag,
    udgave: req.body.udgave,
    pris: req.body.pris,
    createdAt: new Date(),
    updatedAt: new Date(),
  }).then(opretbog => {
    res.redirect('/');
  });
});

// GET bibleverse page
router.get('/bibleverse', (req, res) => {
  let bibelvers = "Bible Verse"; 
  axios.get('https://bible-api.com/john 3:16')
    .then(response => {
      console.log(response.data); // Log the JSON data to the console
      res.render('bibleverse', { title: bibelvers , verse: response.data });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred while fetching the Bible verse.');
    });
});

module.exports = router;
