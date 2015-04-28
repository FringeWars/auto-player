'use strict';

const async = require('async');
const game = require(process.cwd() + '/src/game.js');

module.exports = function(){

	this.Given(/^player (\d+) units move randomly$/, function (player, callback) {
		game.players[player-1].units.forEach(function(unit){
			unit.setBehaviour("movement", "random-move");
		});
		callback();
	});

	this.Then(/^each unit must move following it's "([^"]*)" behaviour$/, function (behaviour, callback) {
		async.eachSeries(game.currentPlayer.units, function(unit, done){
			unit.applyBehaviour(behaviour, function(err){
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