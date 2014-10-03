/**
* Created by dmorgant on 10/10/2013.
*/
define(["require", "exports", 'ZombieGame'], function(require, exports, __game__) {
    var game = __game__;

    ((function go() {
        var stage;

        stage = new createjs.Stage("demoCanvas");

        var zombieGame = new game.ZombieGame(stage);
        zombieGame.startGame();
    })());
});
//# sourceMappingURL=app.js.map
