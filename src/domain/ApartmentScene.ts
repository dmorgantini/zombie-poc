/**
 * Created by dmorgant on 10/10/2013.
 */


import engine = require('../engine/Engine')
import _tilesheets = require('../domain/TileSheets')

declare var createjs:any;

export class ApartmentScene extends engine.Scene {

    private static cafeAsset = new _tilesheets.Cafe();

    constructor(public stage){
        super([
            ApartmentScene.cafeAsset
        ], stage)
    }

    public draw(){

    }

    public init(){
        // draw level



        var cafeSpriteSheet = new createjs.SpriteSheet({
            images:[this.queue.getResult(ApartmentScene.cafeAsset.id)],
            frames:ApartmentScene.cafeAsset.frames
        });


        this.background.forEach((line:string, row:number) => {
            line.split(',').forEach((tileString, column:number)=> {
                var tile =  _tilesheets.Cafe.frameMappings[tileString];

                var current:any = new createjs.Sprite(cafeSpriteSheet);
                current.gotoAndStop(tile.index);
                current.setTransform(column * 32, row*32);
                this.stage.addChild(current);

            });

        });



    }

    private background:any[] = [
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
