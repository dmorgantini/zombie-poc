/**
 * Created by dmorgant on 12/10/2013.
 */

import engine = require('../engine/Engine')

export class Cafe extends engine.TileSheet {

    public static frameMappings = {
        ttwl: new engine.Tile([0, 64, 32, 32], false , 0), // top wall left
        ttwm: new engine.Tile([32, 64, 32, 32], false, 1),// top wall middle
        ttwr: new engine.Tile([64, 64, 32, 32], false, 2), // top wall right
        btwl: new engine.Tile([0, 96, 32, 32], false , 3), // top wall left
        btwm: new engine.Tile([32, 96, 32, 32], false, 4),// top wall middle
        btwr: new engine.Tile([64, 96, 32, 32], false, 5), // top wall right
        f1: new engine.Tile([ 0, 0, 32, 32], true, 6),
        tbl: new engine.Tile([32, 32, 32, 32], false, 7),// top border left
        tbm: new engine.Tile([64, 32, 32, 32],false, 8),// top border middle
        tbr: new engine.Tile([96, 32, 32, 32],false, 9), // top border right
        rb: new engine.Tile([128, 32, 32, 32],false, 10), // right border
        lb: new engine.Tile([160, 32, 32, 32],false, 11), // right border
        f2: new engine.Tile([ 32, 0, 32, 32], true, 12),
        tsw: new engine.Tile([ 160, 64, 32, 32], false, 13),
        bsw: new engine.Tile([ 160, 96, 32, 32], false, 14)


    };

    public frames = function () {
        var keys = Object.keys(Cafe.frameMappings);
        return keys.map((v) => { return Cafe.frameMappings[v].data });
    }();

    constructor() {
        super("cafe", "assets/cafe.png");
    }
}