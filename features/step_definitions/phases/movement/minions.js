'use strict';

const async = require('async');
const game = require(process.cwd() + '/src/game.js');

module.exports = function(){

	this.Given(/^player (\d+) minions move randomly$/, function (player, callback) {
		game.players[player-1].minions.forEach(function(minion){
			minion.setBehaviour("movement", "random-move");
		});
		callback();
	});

	this.Then(/^each minion must move following it's "([^"]*)" behaviour$/, function (behaviour, callback) {
		async.eachSeries(game.currentPlayer.minions, function(minion, done){
			minion.applyBehaviour(behaviour, function(err){
				return done(err);
			});
		}, function(err){
			if(err) {
				console.error(err);
				return callback.fail();
			}
			callback();
		});
	});

};