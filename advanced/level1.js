Game.Level1 = function(game){};
var map;
var layer;
var player;
var controls = {};
var playerSpeed = 200;
var jumpTimer = 0;

Game.Level1.prototype = {
	create:function(){
		this.stage.backgroundColor = "#3A5946";
		this.physics.arcade.gravity.y = 1400;
		map = this.add.tilemap('map',64,64);
		map.addTilesetImage('tileset');
		layer = map.createLayer(0);
		layer.resizeWorld();
		map.setCollisionBetween(0,0);
		player = this.add.sprite(500,560,'player');
		player.anchor.setTo(0.5,0.5);
		player.animations.add('idle',[0,1],1,true);
		player.animations.add('jump',[2],1,true);
		player.animations.add('run',[3,4,5,6,7,8],7,true);
		this.physics.arcade.enable(player);
		this.camera.follow(player);
		player.body.collideWorldBounds = true;
		controls = {
			right: this.input.keyboard.addKey(Phaser.Keyboard.D),
			left: this.input.keyboard.addKey(Phaser.Keyboard.A),
			up: this.input.keyboard.addKey(Phaser.Keyboard.W),
			spacebar: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
		};

	},
	update:function(){
		this.physics.arcade.collide(player,layer);
		player.body.velocity.x = 0;
		if(controls.up.isDown)	player.animations.play('jump');
		if(controls.right.isDown){
			player.animations.play('right');
			player.scale.setTo(1,1);
			player.body.velocity.x += playerSpeed;
		}
		if(controls.left.isDown){
			player.animations.play('run');
			player.scale.setTo(-1,1);
			player.body.velocity.x -= playerSpeed;
		}
		if((controls.up.isDown || controls.spacebar.isDown) && (player.body.onFloor() || player.body.touching.down) && this.time.now > jumpTimer){
			player.body.velocity.y = -900;
			jumpTimer = this.time.now + 0;
			// jumpTimer = this.time.now + 750;
		}

	},
}