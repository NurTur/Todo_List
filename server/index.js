const express = require('express');
const app = express();
const Router = express.Router();

const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require("cors");

const USERS = mongoose.model("users", require("./models/modelUsers"));


const Route = require('./route/route');
const Auth = require('./auth/auth');

const { PORT, SESSION_SECRET, DATABASE } = require("./config/keys");


app.use(cors());
app.use(bodyParser.json());



/*********************************************/
app.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

/*********************************************/


mongoose.connect(DATABASE, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Databases connected")
    Auth(USERS);
    Route(Router, USERS);
    app.use("/api/todolist", Router);

    app.listen(PORT || 3000, () => {
      console.log("Listening on port " + PORT);
    });
  })
  .catch(err => console.log(err));




