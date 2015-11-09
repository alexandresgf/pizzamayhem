define(['phaser', 'Preloader', 'Game'], function (Phaser, Preloader, Game) {
    'use strict';

    function Boot (game) {
        // code me!
    }

    Boot.prototype.constructor = Boot;

    Boot.prototype.init = function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.forceOrientation(true, false);
        this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
        this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
    };
    
    Boot.prototype.create = function () {
        this.game.state.add('Preloader', Preloader);
        this.game.state.add('Game', Game);
        this.game.state.start('Preloader');
    };
    
    Boot.prototype.enterIncorrectOrientation = function () {
        document.getElementById('orientation').style.display = 'block';
    };
    
    Boot.prototype.leaveIncorrectOrientation = function () {
        document.getElementById('orientation').style.display = 'none';
    };

    return Boot;
});