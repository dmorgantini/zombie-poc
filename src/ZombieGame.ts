/**
 * Created by dmorgant on 05/10/2013.
 */

import game = require('engine/Engine')
import apartment = require('domain/ApartmentScene')
import tileSheets = require('domain/TileSheets')

export class ZombieGame extends game.Game {

    constructor(stage) {
        super(stage);

        var apartmentScene = new apartment.ApartmentScene(stage);
        this.addScene(apartmentScene);
        this.currentScene = apartmentScene;

    }

    handleTick(event){
        super.handleTick(event);
    }


}
