define(['phaser', 'Entity'], function (Phaser, Entity) {
    'use strict';
    
    function Enemy (game, x, y, sprite) {
        Entity.call(this, game, x, y, sprite);
    }
    
    Enemy.prototype = Object.create(Entity.prototype);
    Enemy.prototype.constructor = Enemy;
    
    return Enemy;
});