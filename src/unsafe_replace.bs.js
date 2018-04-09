// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Connector = require("./Connector");

var inStr1 = "Replace abc-def";

function replaceFunction1(_, captures, _$1, _$2) {
  return Belt_Array.map(captures, (function (x) {
                  return x.toUpperCase();
                })).join("/");
}

var outStr1 = Connector.unsafeReplaceConnector((/(\w+)-(\w+)/), replaceFunction1, inStr1);

console.log(outStr1);

var inStr2 = "Distance (0, 3) to (4, 6)";

function replaceFunction2(_, captures, _$1, _$2) {
  var numbers = Belt_Array.map(captures, (function (x) {
          return Number(x);
        }));
  console.log(numbers);
  return Math.sqrt(Math.pow(Caml_array.caml_array_get(numbers, 2) - Caml_array.caml_array_get(numbers, 0), 2.0) + Math.pow(Caml_array.caml_array_get(numbers, 3) - Caml_array.caml_array_get(numbers, 1), 2.0)).toString();
}

var outStr2 = Connector.unsafeReplaceConnector((/\((\d+), (\d+)\) to \((\d+), (\d+)\)/), replaceFunction2, inStr2);

console.log(outStr2);

exports.inStr1 = inStr1;
exports.replaceFunction1 = replaceFunction1;
exports.outStr1 = outStr1;
exports.inStr2 = inStr2;
exports.replaceFunction2 = replaceFunction2;
exports.outStr2 = outStr2;
/* outStr1 Not a pure module */
