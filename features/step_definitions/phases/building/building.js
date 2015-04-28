'use strict';

const async = require('async');
const game = require(process.cwd() + '/src/game.js');

module.exports = function(){

    this.Then(/^a random unit or minion who is in a territory with no buildings, builds a building$/, function (callback) {
        callback();
    });

};




