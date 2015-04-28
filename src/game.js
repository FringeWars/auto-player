'use strict';

module.exports = {
	players : [],
	currentPhase : "",

	start: function(cbk){
		if(cbk) cbk();
	},

	nextTurn: function(cbk){
		this.currentPlayer = this.players[0];
		this.currentPhase = "movement";

		if(cbk) cbk();
	},

	move : function(unitType, cbk){
		if(cbk) cbk();
	}
};