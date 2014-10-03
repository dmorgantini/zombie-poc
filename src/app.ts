/**
 * Created by dmorgant on 10/10/2013.
 */

import game = require('ZombieGame');
declare var createjs:any;

(function go() {
    var stage;

    stage = new createjs.Stage("demoCanvas");

    var zombieGame = new game.ZombieGame(stage);
    zombieGame.startGame();
} ());