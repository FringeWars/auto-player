'use strict';

const game = require(process.cwd() + '/src/game.js');

module.exports = function(){

	this.Then(/^the "([^"]*)" phase is reached$/, function (phase, callback) {
		if (game.currentPhase == phase){
			return callback();
		} else {
			console.error("incorrect phase", game.currentPhase);
			return callback.fail();
		}
	});

	this.Then(/^the "([^"]*)" phase is finished/, function (phase, callback) {
		if (game.currentPhase == phase){
			game.nextPhase();
			return callback();
		} else {
			console.error("incorrect phase", game.currentPhase);
			return callback.fail();
		}
	});

};