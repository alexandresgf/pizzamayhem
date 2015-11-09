define(['phaser', 'Entity'], function (Phaser, Entity) {
    'use strict';
    
    function Item (game, x, y, sprite) {
        Entity.call(this, game, x, y, sprite);
    }
    
    Item.prototype = Object.create(Entity.prototype);
    Item.prototype.constructor = Item;
    
    return Item;
});