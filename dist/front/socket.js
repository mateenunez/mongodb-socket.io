"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveTrophy = exports.newTrophy = exports.loadTrophies = exports.deleteTrophy = exports.completeTrophy = void 0;
var socket = io();
var loadTrophies = exports.loadTrophies = function loadTrophies(callback) {
  socket.on("loadTrophies", callback);
};
var saveTrophy = exports.saveTrophy = function saveTrophy(title, description, imgUrl, date) {
  socket.emit('saveTrophy', {
    title: title,
    description: description,
    imgUrl: imgUrl,
    date: date
  });
};
var newTrophy = exports.newTrophy = function newTrophy(callback) {
  socket.on("newTrophy", callback);
};
var deleteTrophy = exports.deleteTrophy = function deleteTrophy(id) {
  socket.emit("deleteTrophy", id);
};
var completeTrophy = exports.completeTrophy = function completeTrophy(id) {
  socket.emit("completeTrophy", id);
};