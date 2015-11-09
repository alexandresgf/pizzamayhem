define(['phaser'], function (Phaser) {
    'use strict';
    
    function Entity (game, x, y, sprite) {
        Phaser.Sprite.call(this, game, x, y, sprite);

        // enable physics
        this.game.physics.arcade.enableBody(this);
        
        // put the origin in the middle of sprite
        this.anchor.set(0.5);

	    // entity speed
	    this._speed = 0;
    }
    
    Entity.prototype = Object.create(Phaser.Sprite.prototype);
    Entity.prototype.constructor = Entity;

	Object.defineProperty(Entity.prototype, 'speed', {
		get: function () {
			return this._speed;
		},

		set: function (value) {
			this._speed = value;
		}
	});
    
    return Entity;
});