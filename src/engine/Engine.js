var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function(require, exports) {
    var Game = (function () {
        function Game(stage) {
            this.stage = stage;
            this.queue = new createjs.LoadQueue();
            this.scenes = [];
        }
        Game.prototype.handleTick = function (event) {
            this.currentScene.draw();
            this.stage.update();
        };

        // starts the game assuming that all scenes required to play the game have already been setup
        // nothing dynamic yet
        Game.prototype.startGame = function () {
            var _this = this;
            this.loadContent(function () {
                _this.currentScene.init();
                _this.stage.update();
                createjs.Ticker.addEventListener("tick", function (event) {
                    _this.handleTick(event);
                });

                // Targeting 60 FPS
                createjs.Ticker.setFPS(60);
            });
        };

        Game.prototype.loadContent = function (complete) {
            var _this = this;
            this.queue.addEventListener("complete", complete);
            this.scenes.forEach(function (item) {
                _this.queue.loadManifest(item.assets);
            });
        };

        Game.prototype.addScene = function (scene) {
            scene.queue = this.queue;
            this.scenes.push(scene);
        };
        return Game;
    })();
    exports.Game = Game;

    var Scene = (function () {
        function Scene(assets, stage) {
            this.assets = assets;
            this.stage = stage;
        }
        Scene.prototype.draw = function () {
        };

        Scene.prototype.init = function () {
        };
        return Scene;
    })();
    exports.Scene = Scene;

    var Asset = (function () {
        /*
        These parameters are named like such in order to support PreLoadJS and the loadfile/loadmanifest methods
        id: an id used to identify the asset
        src: path to download the asset
        */
        function Asset(id, src) {
            this.id = id;
            this.src = src;
        }
        return Asset;
    })();
    exports.Asset = Asset;

    var TileSheet = (function (_super) {
        __extends(TileSheet, _super);
        function TileSheet(id, src) {
            _super.call(this, id, src);
            this.id = id;
            this.src = src;
        }
        return TileSheet;
    })(Asset);
    exports.TileSheet = TileSheet;

    var Tile = (function () {
        function Tile(data, walkable, index) {
            this.data = data;
            this.walkable = walkable;
            this.index = index;
        }
        return Tile;
    })();
    exports.Tile = Tile;
});
//# sourceMappingURL=Engine.js.map
