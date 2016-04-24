'use strict';
var booljs = require('bool.js');

// Here is where magic happens
(
    booljs('space.oonowaa.api', ["booljs-mongoose"])
    .setServerLoader('booljs-express')
    .setDatabaseLoader('booljs-mongoose')
).run();
