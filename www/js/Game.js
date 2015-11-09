define(['phaser', 'Scene', 'Ground', 'Player'], function (Phaser, Scene, Ground, Player) {
    'use strict';
    
    function Game (game) {
        // player reference
        this._player = null;

        // scene elements
	    this._parallax = null;
	    this._ground = null;

	    // gui
	    this._btn_jump = null;
	    this._btn_delivery = null;

	    // houses group
	    this._houses = game.add.group();
        
        // item group
        this._items = game.add.group();
        
        // enemy group
        this._enemies = game.add.group();
    }
    
    Game.prototype.constructor = Game;
    
    Game.prototype.create = function () {
        // set world bounds
        this.game.world.setBounds(0, 0, 960, 544);
        
        // enable physics system
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        // set gravity on y-axis
        this.game.physics.arcade.gravity.y = 500;

	    // create character
	    this._player = new Player(this.game, this.game.width / 2, 0, 'player');

        // test city 01
        this._parallax = new Scene(this.game, 0, 0, 960, 544, 'c01_parallax');
        this._ground = new Ground(this.game, 0, 0, 960, 544, 'c01_ground');

        // add entity in the game
	    this.game.add.existing(this._parallax);
        this.game.add.existing(this._ground);
	    this.game.add.existing(this._player);

	    // in-game gui
	    this._btn_jump = this.game.add.button(10, this.game.world.height - 10, 'btn_jump');
	    this._btn_jump.anchor.y = 1;
	    this._btn_jump.events.onInputUp.add(this._player.jump, this._player);

	    this._btn_delivery = this.game.add.button(this.game.world.width - 10, this.game.world.height - 10, 'btn_delivery');
	    this._btn_delivery.anchor.x = 1;
	    this._btn_delivery.anchor.y = 1;
    };

    Game.prototype.update = function () {
        this.game.physics.arcade.collide(this._player, this._ground);
    };
    
    return Game;
});