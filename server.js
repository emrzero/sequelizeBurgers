var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;

//Express data handling
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type : 'application/vdn.api+json' }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(methodOverride('_method'));

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT, function() {
  console.log("listening on port " + PORT);
});
