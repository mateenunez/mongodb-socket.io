"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readTrophies = exports.progressbar = exports.handleSubmit = exports.handleDelete = exports.handleComplete = void 0;
var _main = require("./main.js");
var _socket = require("./socket.js");
var total = 45;
var done = 32;
var handleSubmit = exports.handleSubmit = function handleSubmit(e) {
  (0, _socket.saveTrophy)(_main.trophyForm['title'].value, _main.trophyForm['description'].value, _main.trophyForm['imgUrl'].value, _main.trophyForm['date'].value);
  console.log("Trophy submitted...");
};
var handleDelete = exports.handleDelete = function handleDelete(e) {
  e.preventDefault();
  (0, _socket.deleteTrophy)(e.target.id);
  console.log("Deleting trophy...");
};
var handleComplete = exports.handleComplete = function handleComplete(e) {
  e.preventDefault();
  (0, _socket.completeTrophy)(e.target.id);
  progressbar();
};
var readTrophy = function readTrophy(trophy) {
  var div = document.createElement("div");
  div.innerHTML = "<div class=\"card mb-3\" style=\"max-height:280px; width:430px; min-height:215px\">\n    <div class=\"row g-0\">\n      <div class=\"col-md-2\">\n        <img src=\"".concat(trophy.imgUrl, "\" alt=\"").concat(trophy.title, "\" class=\"img-fluid rounded-start\" >\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\"> ").concat(trophy.title, " </h5>\n          <p class=\"card-text\">").concat(trophy.description, "</p>\n          <p class=\"card-text\"><small class=\"text-body-secondary\">Estado: ").concat(trophy.status ? 'completo' : 'incompleto', "</small></p>\n          ").concat(trophy.date ? "<p class=\"card-text\"><small class=\"text-body-secondary\">Fecha objetivo: ".concat(trophy.date.slice(0, 10), "</small></p>") : '', "\n          ").concat(trophy.status ? "<p class=\"card-text\"> Fecha completado: ".concat(trophy.dateCompleted, "</p>") : '', "\n          </div>\n          ").concat(trophy.status ? "" : "<button class=\"btn btn-outline-success btn-sm\" id=\"".concat(trophy._id, "\"> Completar </button>"), "\n          \n          <button class=\"btn btn-outline-danger btn-sm\" id=\"").concat(trophy._id, "\"> Eliminar </button>\n      </div>\n    </div>\n  </div>");
  var btncomplete = div.querySelector(".btn-outline-success");
  if (btncomplete) btncomplete.addEventListener("click", handleComplete);
  var btndelete = div.querySelector(".btn-outline-danger");
  btndelete.addEventListener("click", handleDelete);
  return div;
};
var readTrophies = exports.readTrophies = function readTrophies(trophies) {
  _main.trophyList.innerHTML = "";
  trophies.forEach(function (trophy) {
    if (trophy.status) {
      done = done + 1;
    }
    _main.trophyList.append(readTrophy(trophy));
  });
  progressbar();
};
var progressbar = exports.progressbar = function progressbar() {
  var progress = done * 100 / total;
  console.log("progress: ".concat(progress));
  var div = document.getElementById("progress-ui");
  div.style = "width: ".concat(progress, "%");
  var display = document.getElementById("display");
  display.innerHTML = "".concat(Math.trunc(progress), "%");
};