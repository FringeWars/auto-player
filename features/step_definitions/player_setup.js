'use strict';

const game = require(process.cwd() + '/src/game.js');

module.exports = function(){

	this.Given(/^player (\d+) is "([^"]*)"$/, function (player, faction, callback) {
		game.players[player-1] = {
			faction: faction,
			minions:[],
			units:[],
			buildings:[],
			stronghold : { isAlive : function(){ return true; } },

			addMinion: function(minion){
				this.minions.push(minion);
			}

		};
		callback();
	});


	this.Given(/^player (\d+) has (\d+) minions$/, function (player, minions, callback) {
		for(var i =0; i< minions; i++){

			var newMinion = {
				behaviours: {},

				setBehaviour: function(behaviourType, behaviourSource){
					this.behaviours[behaviourType] = behaviourSource;
				},

				applyBehaviour: function(behaviourType, cbk){
					if(cbk) cbk();
				}
			};

			game.players[player-1].addMinion(newMinion);
		}
		callback();
	});

};