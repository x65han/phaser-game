Game.Preloader = function(game){
	this.preloadBar = null;
};

Game.Preloader.prototype = {
	preload: function(){
		this.preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloaderBar');
		this.preloadBar.anchor.setTo(0.5,0.5);
		this.time.advancedTiming = true;
		this.load.setPreloadSprite(this.preloadBar);

		// LOAD all Assets
		this.load.tilemap('map','level1.csv');
		this.load.image('tileset','tile.png');
		this.load.spritesheet('player','player.png',24,26);

	},
	create: function(){
		this.state.start('Level1');
	}
}