/**
 * Created by dmorgant on 10/10/2013.
 */

declare var createjs:any;

export class Game {

    private scenes:Scene[];
    private queue:any;
    public currentScene:Scene;

    constructor(private stage) {
        this.queue = new createjs.LoadQueue();
        this.scenes = [];
    }

    public handleTick(event) {
        this.currentScene.draw();
        this.stage.update()
    }

    // starts the game assuming that all scenes required to play the game have already been setup
    // nothing dynamic yet
    public startGame(){
        this.loadContent(() => {
            this.currentScene.init();
            this.stage.update();
            createjs.Ticker.addEventListener("tick", (event) => {
                this.handleTick(event);
            });
            // Targeting 60 FPS
            createjs.Ticker.setFPS(60);
        });
    }

    private loadContent(complete:Function){
        this.queue.addEventListener("complete", complete);
        this.scenes.forEach((item:Scene) => {
            this.queue.loadManifest(item.assets);
        });
    }

    public addScene(scene:Scene){
        scene.queue = this.queue;
        this.scenes.push(scene);
    }

}

export class Scene {

    public queue:any;

    constructor(public assets:Asset[], public stage){}

    public draw(){}

    public init(){}

}

export class Asset{
    /*
     These parameters are named like such in order to support PreLoadJS and the loadfile/loadmanifest methods
     id: an id used to identify the asset
     src: path to download the asset
     */
    constructor(public id:string, public src:string){
    }

}

export class TileSheet extends Asset {

    public frames:Array[];

    constructor(public id:string, public src:string){
        super(id, src)
    }
}

export class Tile {
    constructor(public data:Array[], public walkable:boolean, public index:Number) {
    }
}