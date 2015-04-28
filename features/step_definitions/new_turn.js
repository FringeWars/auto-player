'use strict';

const game = require(process.cwd() + '/src/game.js');

module.exports = function(){

	this.When(/^a new turn starts$/, function (callback) {
		world.turn++;
		callback();
	});

};