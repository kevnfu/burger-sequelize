'use strict';

const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const db = require('./models') // start database
const PORT = process.env.PORT || 8080;

let app = express();

app.engine("handlebars", exphbs({
  defaultLayout: "main",
  helpers: {
    section: function(name, options) { 
      if (!this._sections) this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
      }
  }
}));

app.set("view engine", "handlebars");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

// My routes
app.use(require('./routes/api-routes.js'));

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });
});