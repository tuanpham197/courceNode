const express = require('express');
const morgan = require('morgan');
const app = express();
const exphbs  = require('express-handlebars');
const port = 3000;
const path = require('path');
const route = require('./routes');
const db = require('./config/db');
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'public')));
app.engine('hbs', exphbs({
    extname : '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));
//console.log(path.join(__dirname, '/resources/views'));

// connect mongodb
db.connect();

// hanlde route
route(app);

app.listen(port,()=> console.log("Connect successfully !!"));