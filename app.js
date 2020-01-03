var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

require('./backend/models/item.js');
require('./backend/config/mongoose.js');

var routes = require('./backend/config/routes.js');
routes(app);

app.listen(8000, function(req,res){
    console.log("listening on 8000");
})