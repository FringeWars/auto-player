'use strict';

const async = require('async');
const game = require(process.cwd() + '/src/game.js');

module.exports = function(){

    this.Then(/^each building recruits randomly$/, function (callback) {
        game.currentPlayer.buildings.forEach(function (building){
            building.recruit();
        });
        callback();
    });

};







