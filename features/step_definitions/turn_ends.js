'use strict';

const game = require(process.cwd() + '/src/game.js');

module.exports = function(){

    this.When(/^the turn ends and next player starts$/, function (callback) {
        game.nextPlayer();
        callback();
    });


};