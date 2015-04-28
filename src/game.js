'use strict';

module.exports = {
	players : ["player1","player2"],
	phases : ["movement","combat","regrouping","recruitment","building"],
	currentPhase : "",
	currentPlayer : "",
	combats : [],

	start: function(cbk){
		if(cbk) cbk();
	},

	nextPhase : function (){
		var phase = this.phases.indexOf(this.currentPhase);
		if(++phase>this.phases.length) {
			this.currentPhase="";
			this.nextTurn();
		}
		else {
			this.currentPhase = this.phases[phase];
		}
	},

	nextTurn: function(cbk){
		this.currentPlayer = this.players[0];
		this.nextPhase();
		if(cbk) cbk();
	},

	nextPlayer: function(cbk){
		var player = this.players.indexOf(this.currentPlayer);
		if(++player>this.players.length) {
			this.currentPlayer=this.players[0];
		}
		else {
			this.currentPlayer = this.players[player];
		}
		if(cbk) cbk();
	},

	move : function(unitType, cbk){
		if(cbk) cbk();
	}
};