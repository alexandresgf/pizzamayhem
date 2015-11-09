define(['phaser', 'Scene'], function (Phaser, Scene) {
    'use strict';

    function Ground (game, x, y, width, height, sprite) {
	    Scene.call(this, game, x, y, width, height, sprite);

    	// enable physics
    	this.game.physics.arcade.enableBody(this);

    	// don't let gravity affects me
    	this.body.allowGravity = false;

    	// don't let the body moves in collision
    	this.body.immovable = true;

	    // box collision size
	    this.body.setSize(width, height - 352, x, 352);
    }

    Ground.prototype = Object.create(Scene.prototype);
    Ground.prototype.constructor = Ground;

    return Ground;
});