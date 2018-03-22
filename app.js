var express = require('express');
var app = express();

var apiRoutes = require('./apiRoutes');

app.use("/", apiRoutes);

app.listen(8080, () => {
    console.log("Listening on port 8080");
});