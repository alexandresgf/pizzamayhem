define(['phaser', 'Boot'], function (Phaser, Boot) {
    'use strict';

    var game;

    game = new Phaser.Game(960, 544, Phaser.AUTO, 'game');
    game.state.add('Boot', Boot);
    game.state.start('Boot');
});