var Match3 = Match3 || {};

Match3.game = new Phaser.Game(360, 640, Phaser.AUTO);

Match3.game.state.add('Boot', Match3.BootState);
Match3.game.state.add('Preload', Match3.PreloadState);
Match3.game.state.add('Game', Match3.GameState);

Match3.game.state.start('Boot');
