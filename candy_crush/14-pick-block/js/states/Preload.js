var Match3 = Match3 || {};

//loading the game assets
Match3.PreloadState = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(100, 1);
    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.image('block1', 'assets/images/bean_blue.png');
    this.load.image('block2', 'assets/images/bean_green.png');
    this.load.image('block3', 'assets/images/bean_orange.png');
    this.load.image('block4', 'assets/images/bean_pink.png');
    this.load.image('block5', 'assets/images/bean_purple.png');
    this.load.image('block6', 'assets/images/bean_yellow.png');
    this.load.image('block7', 'assets/images/bean_red.png');
    this.load.image('block8', 'assets/images/bean_white.png');
    this.load.image('deadBlock', 'assets/images/bean_dead.png');
    this.load.image('background', 'assets/images/backyard2.png');

  },
  create: function() {
    this.state.start('Game');
  }
};