const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const passportJWT = require('passport-jwt');

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

const jwt = require('jsonwebtoken');

mongoose.connect(
    "mongodb+srv://regisss:KJZ8ifThpL0OTkAk@cluster0.exu84.mongodb.net/",
    // () => console.log("Connected to MongoDB") 
).then(() => console.log("MongoDB connected"))
    .catch(err => console.log("Error connecting to MongoDb", err));

app.listen(port, () => console.log(`Server started on port ${port}`));