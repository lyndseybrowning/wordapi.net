'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var customValidators = {
  atLeastOneRequired: function atLeastOneRequired() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    var filter = params.filter(function (param) {
      return typeof param !== 'undefined';
    });

    return filter.length > 0;
  }
};

exports.default = customValidators;