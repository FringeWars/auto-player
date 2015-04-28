'use strict';

const game = require(process.cwd() + '/src/game.js');

module.exports = function(){

    this.When(/^all strongholds are alive$/, function (callback) {
        var alive = true;
        game.players.forEach( function (player){
            if(!player.stronghold.isAlive()){
                alive = false;
            }
        } );

        if(alive){
            callback();
        }

    });

};