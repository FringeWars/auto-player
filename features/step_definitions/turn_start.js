'use strict';

const game = require(process.cwd() + '/src/game.js');

module.exports = function(){

	this.When(/^the turn starts$/, function (callback) {
		game.nextTurn(function(err){
			if(err){
				console.error(err);
				return callback.fail();
			}

			callback();
		});
	});


};