define(['phaser'], function (Phaser) {
    'use strict';
    
    function Preloader (game) {
        // code me!
    }
    
    Preloader.prototype.constructor = Preloader;
    
    Preloader.prototype.preload = function () {        
        // load city 01
        this.load.image('c01_parallax', 'assets/maps/city_01/parallax.png');
        this.load.image('c01_ground', 'assets/maps/city_01/ground.png');

        // load misc images
	    this.load.image('btn_delivery', 'assets/misc/btn_delivery.png');
	    this.load.image('btn_jump', 'assets/misc/btn_jump.png');
        
        // load sprites
        this.load.spritesheet('player', 'assets/sprites/player.png', 64, 64, 16);
    };
    
    Preloader.prototype.create = function () {
        this.game.state.start('Game');
    };
    
    return Preloader;
});