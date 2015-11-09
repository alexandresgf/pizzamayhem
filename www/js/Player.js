define(['phaser', 'Entity'], function (Phaser, Entity) {
    'use strict';
    
    function Player (game, x, y, sprite) {
        Entity.call(this, game, x, y, sprite);
        
        /** the timecounter is the player life 
            the default value is 2 minutes */
        this.health = 120;
        
        // wave of pizzas for delivering
        this._pizzaWave = 0;
        
        // delivered pizzas
        this._deliveredPizzas = 0;
        
        // lost pizzas
        this._lostPizzas = 0;
        
        // tip (score)
        this._tip = 0;

        // character speed
        this._speed = 200;
        
        // register character animation frames
        this.animations.add('ride', [8, 9, 10, 11]);
        this.animations.play('ride', 10, true);
    }
    
    Player.prototype = Object.create(Entity.prototype);
    Player.prototype.constructor = Player;
    
    Player.prototype.gimmeTips = function (value) {
        this._tip += value;
    };
    
    Player.prototype.deliveryArrived = function () {
        this._deliveredPizzas++;
    };
    
    Player.prototype.losePizza = function () {
        this._lostPizzas++;
    };

    Player.prototype.jump = function () {
	    if (this.body.velocity.y === 0)
	        this.body.velocity.y = -350;
    };
    
    Object.defineProperty(Player.prototype, 'tip', {
        get: function () {
            return this._tip;
        },
        
        set: function (value) {
            this._tip = value;
        }
    });
    
    Object.defineProperty(Player.prototype, 'wave', {
        get: function () {
            return this._pizzaWave;
        },
        
        set: function (value) {
            this._pizzaWave = value;
        }
    });
    
    Object.defineProperty(Player.prototype, 'delivered', {
        get: function () {
            return this._deliveredPizzas;
        },
        
        set: function (value) {
            this._deliveredPizzas = value;
        }
    });
    
    Object.defineProperty(Player.prototype, 'lost', {
        get: function () {
            return this._lostPizzas;
        },
        
        set: function (value) {
            this._lostPizzas = value;
        }
    });
    
    return Player;
});