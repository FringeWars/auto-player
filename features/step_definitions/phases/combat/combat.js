'use strict';

const async = require('async');
const game = require(process.cwd() + '/src/game.js');

module.exports = function(){

	this.Then(/^each combat it resolves$/, function (callback) {

		game.combats.forEach(function(combat){

		});

		callback();

	});

};