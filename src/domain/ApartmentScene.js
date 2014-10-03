/**
* Created by dmorgant on 10/10/2013.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../engine/Engine', '../domain/TileSheets'], function(require, exports, __engine__, ___tilesheets__) {
    var engine = __engine__;
    var _tilesheets = ___tilesheets__;

    var ApartmentScene = (function (_super) {
        __extends(ApartmentScene, _super);
        function ApartmentScene(stage) {
            _super.call(this, [
                ApartmentScene.cafeAsset
            ], stage);
            this.stage = stage;
            this.background = [
                'tbl,tbm,tbm,tbm,tbm,tbm,tbm,tbm,tbm,tbm,tbr',
                'lb,tsw,ttwm,ttwm,ttwm,ttwm,ttwm,ttwm,ttwm,ttwm,rb',
                'lb,bsw,btwm,btwm,btwm,btwm,btwm,btwm,btwm,btwm,rb',
                'lb,f2,f1,f1,f1,f1,f1,f1,f1,f1,rb',
                'lb,f2,f1,f1,f1,f1,f1,f1,f1,f1,rb',
                'lb,f2,f1,f1,f1,f1,f1,f1,f1,f1,rb',
                'lb,f2,f1,f1,f1,f1,f1,f1,f1,f1,rb',
                'lb,f2,f1,f1,f1,f1,f1,f1,f1,f1,rb'
            ];
        }
        ApartmentScene.prototype.draw = function () {
        };

        ApartmentScene.prototype.init = function () {
            var _this = this;
            // draw level
            var cafeSpriteSheet = new createjs.SpriteSheet({
                images: [this.queue.getResult(ApartmentScene.cafeAsset.id)],
                frames: ApartmentScene.cafeAsset.frames
            });

            this.background.forEach(function (line, row) {
                line.split(',').forEach(function (tileString, column) {
                    var tile = _tilesheets.Cafe.frameMappings[tileString];

                    var current = new createjs.Sprite(cafeSpriteSheet);
                    current.gotoAndStop(tile.index);
                    current.setTransform(column * 32, row * 32);
                    _this.stage.addChild(current);
                });
            });
        };
        ApartmentScene.cafeAsset = new _tilesheets.Cafe();
        return ApartmentScene;
    })(engine.Scene);
    exports.ApartmentScene = ApartmentScene;
});
//# sourceMappingURL=ApartmentScene.js.map
