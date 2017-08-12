'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _triePrefixTree = require('trie-prefix-tree');

var _triePrefixTree2 = _interopRequireDefault(_triePrefixTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var toLower = function toLower(word) {
  return word.toLowerCase();
};

exports.default = {
  loadDictionary: function loadDictionary() {
    var pathToFile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _config2.default.dictionary.sowpods;

    var removeEmptyEntries = function removeEmptyEntries(entry) {
      return entry !== '';
    };

    try {
      var file = _path2.default.join(__dirname, pathToFile);
      var items = _fs2.default.readFileSync(file).toString().split(/\r?\n/).filter(removeEmptyEntries).map(toLower);

      var dictionary = this.createDictionary(items);

      return dictionary;
    } catch (e) {
      throw 'loadDictionary expects a valid path';
    }
  },
  createDictionary: function createDictionary(dictionary) {
    return (0, _triePrefixTree2.default)(dictionary);
  },


  toLower: toLower,

  filterByLength: function filterByLength(list, length) {
    return list.filter(function (word) {
      return word.length === length;
    });
  },
  filterBySuffix: function filterBySuffix(list, suffix) {
    return list.filter(function (word) {
      var wordLen = word.length;
      var startAt = wordLen - suffix.length;
      return word.substring(startAt, wordLen) === suffix.toLowerCase();
    });
  },
  randomiseWord: function randomiseWord(word) {
    var shuffle = [].concat(_toConsumableArray(word));

    word.split('').forEach(function (letter, index) {
      var randomPos = Math.floor(Math.random() * (index + 1));
      var letterAtRandomPos = shuffle[randomPos];

      shuffle[randomPos] = letter;
      shuffle[index] = letterAtRandomPos;
    });

    return shuffle;
  },
  randomiseList: function randomiseList(list) {
    var _this = this;

    return list.map(function (word) {
      var shuffle = _this.randomiseWord(word);

      return {
        anagram: shuffle.join(''),
        word: word
      };
    });
  }
};