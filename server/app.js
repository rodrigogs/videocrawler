'use strict';

var express = require('express');
var router = express.Router();
var app = express();

require('./routes')(router);

app.use(router);

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
  console.log("Server listening");
});