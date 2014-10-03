/**
* Created by dmorgant on 05/10/2013.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'engine/Engine', 'domain/ApartmentScene'], function(require, exports, __game__, __apartment__) {
    var game = __game__;
    var apartment = __apartment__;
    

    var ZombieGame = (function (_super) {
        __extends(ZombieGame, _super);
        function ZombieGame(stage) {
            _super.call(this, stage);

            var apartmentScene = new apartment.ApartmentScene(stage);
            this.addScene(apartmentScene);
            this.currentScene = apartmentScene;
        }
        ZombieGame.prototype.handleTick = function (event) {
            _super.prototype.handleTick.call(this, event);
        };
        return ZombieGame;
    })(game.Game);
    exports.ZombieGame = ZombieGame;
});
//# sourceMappingURL=ZombieGame.js.map
