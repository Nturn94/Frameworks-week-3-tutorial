var http = require("http"); // http module
var routes = require("./route.js"); // route //module
http.createServer(routes.handleRequest).listen(3000);