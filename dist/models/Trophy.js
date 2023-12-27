"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var Trophy = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: [80, 'Nombre muy grande']
  },
  description: {
    type: String,
    required: false,
    maxLength: [150, 'Descripcion muy grande']
  },
  imgUrl: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: false
  },
  dateCompleted: {
    type: String
  },
  status: {
    type: Boolean,
    "default": false,
    required: true
  }
});
var _default = exports["default"] = (0, _mongoose.model)("Trophy", Trophy);