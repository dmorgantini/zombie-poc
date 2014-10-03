/**
* Created by dmorgant on 12/10/2013.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../engine/Engine'], function(require, exports, __engine__) {
    var engine = __engine__;

    var Cafe = (function (_super) {
        __extends(Cafe, _super);
        function Cafe() {
            _super.call(this, "cafe", "assets/cafe.png");
            this.frames = (function () {
                var keys = Object.keys(Cafe.frameMappings);
                return keys.map(function (v) {
                    return Cafe.frameMappings[v].data;
                });
            })();
        }
        Cafe.frameMappings = {
            ttwl: new engine.Tile([0, 64, 32, 32], false, 0),
            ttwm: new engine.Tile([32, 64, 32, 32], false, 1),
            ttwr: new engine.Tile([64, 64, 32, 32], false, 2),
            btwl: new engine.Tile([0, 96, 32, 32], false, 3),
            btwm: new engine.Tile([32, 96, 32, 32], false, 4),
            btwr: new engine.Tile([64, 96, 32, 32], false, 5),
            f1: new engine.Tile([0, 0, 32, 32], true, 6),
            tbl: new engine.Tile([32, 32, 32, 32], false, 7),
            tbm: new engine.Tile([64, 32, 32, 32], false, 8),
            tbr: new engine.Tile([96, 32, 32, 32], false, 9),
            rb: new engine.Tile([128, 32, 32, 32], false, 10),
            lb: new engine.Tile([160, 32, 32, 32], false, 11),
            f2: new engine.Tile([32, 0, 32, 32], true, 12),
            tsw: new engine.Tile([160, 64, 32, 32], false, 13),
            bsw: new engine.Tile([160, 96, 32, 32], false, 14)
        };
        return Cafe;
    })(engine.TileSheet);
    exports.Cafe = Cafe;
});
//# sourceMappingURL=TileSheets.js.map
