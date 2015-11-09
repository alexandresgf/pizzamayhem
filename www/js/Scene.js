define(['phaser'], function (Phaser) {
	'use strict';
	
	function Scene (game, x, y, width, height, sprite) {
		Phaser.TileSprite.call(this, game, x, y, width, height, sprite);

		// scene speed
		this._speed = 10;
	}

	Scene.prototype = Object.create(Phaser.TileSprite.prototype);
	Scene.prototype.constructor = Scene;

	Scene.prototype.update = function () {
		// scroll the scene
		this.tilePosition.x -= this._speed;
	};

	Object.defineProperty(Scene.prototype, 'speed', {
		get: function () {
			return this._speed;
		},

		set: function (value) {
			this._speed = value;
		}
	});

	return Scene;
});