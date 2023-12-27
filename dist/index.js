"use strict";

var _app = _interopRequireDefault(require("./app"));
var _http = _interopRequireDefault(require("http"));
var _socket = require("socket.io");
var _database = require("./database");
var _socket2 = _interopRequireDefault(require("./socket"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// io es la conexion establecida con los clientes y debe estar conectada al servidor (app) de la siguiente manera.
var server = _http["default"].createServer(_app["default"]);
var httpServer = server.listen(3000);
var io = new _socket.Server(httpServer);
(0, _socket2["default"])(io);
(0, _database.connectDB)();

//Con estas tres lineas anteriores conectamos el server y el server web socket.
console.log('Server is running on port 3000');