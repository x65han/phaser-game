var game = new Phaser.Game(800,600,Phaser.CANVAS,"gameDiv");
var spacefield,player,cursors,bullets,bulletTime = 0,fireButton,enemies;
var mainState = {
	preload:function(){
		game.load.image('starfield','starfield.jpg');
		game.load.image("player","player.png");
		game.load.image("bullet","bullet.png");
		game.load.image("enemy",'enemy.png');
	},
	create:function(){
		spacefield = game.add.tileSprite(0,0,800,600,'starfield');
		player = game.add.sprite(game.world.centerX, game.world.centerY+75,"player");
		game.physics.enable(player,Phaser.Physics.ARCADE);
		cursors = game.input.keyboard.createCursorKeys();
		bullets = game.add.group();
		bullets.enableBody  = true;
		bullets.physicsBodyType = Phaser.Physics.ARCADE;
		bullets.createMultiple(300,"bullet");
		bullets.setAll('anchor.x',0.5);
		bullets.setAll('anchor.y',1);
		bullets.setAll('outOfBoundsKill',true);
		bullets.setAll('checkWorldBounds',true);
		fireButton =  game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		enemies = game.add.group();
		enemies.enableBody = true;
		enemies.physicsBodyType = Phaser.Physics.ARCADE;

		createEnemies();
	},
	update:function(){
		game.physics.arcade.overlap(bullets,enemies,collisionHandler,null,this);
		player.body.velocity.x = 0;
		spacefield.tilePosition.y += 1;
		if(cursors.left.isDown) player.body.velocity.x = -350;
		if(cursors.right.isDown) player.body.velocity.x = 350;
		if(fireButton.isDown) fire();
	}
}
// Utility function
function collisionHandler(bullet,enemy){
	bullet.kill();
	enemy.kill();
}
function createEnemies(){
	for(var y = 0;y < 4;y++){
		for(var x = 0; x < 10;x++){
			var enermy  = enemies.create(x*48,y*50,'enemy');
			enermy.anchor.setTo(0.5,0.5);
		}
	}
	enemies.x = 100;
	enemies.y = 50;

	var tween = game.add.tween(enemies).to({x:200}, 2000,Phaser.Easing.Linear.None,true,0,1000,true);
	tween.onRepeat.add(descend,this);
}
function descend(){
	console.log(enemies.y);
	enemies.y += 30;
}
function fire(){
	if(game.time.now > bulletTime){
		bullet = bullets.getFirstExists(false);
		if(bullet){
			bullet.reset(player.x + 128,player.y + 50);
			bullet.body.velocity.y = -400;
			bulletTime = game.time.now + 10;
		}
	}
}
//Kick off
game.state.add('mainState',mainState);
game.state.start('mainState');