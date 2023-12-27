"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trophyList = exports.trophyForm = void 0;
var _socket = require("./socket.js");
var _UI = require("./UI.js");
(0, _socket.newTrophy)(_UI.readTrophies);
(0, _socket.loadTrophies)(_UI.readTrophies);
var trophyList = exports.trophyList = document.querySelector('#trophies');
var trophyForm = exports.trophyForm = document.querySelector('#form');
trophyForm.addEventListener('submit', _UI.handleSubmit);