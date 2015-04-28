'use strict';

const game = require(process.cwd() + '/src/game.js');

module.exports = function(){

	this.When(/^the game starts$/, function (callback) {
		game.start(function(err){
			if(err){
				console.error(err);
				return callback.fail();
			}

			callback();
		});
	});

};