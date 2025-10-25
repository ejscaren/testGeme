import { TitleScene } from "./TitleScene.js";
import { Arena } from "./Arena.js";
import { EndScreen } from "./EndScreen.js";
import { Phone } from "./Phone.js";


let config = {
        width: 1280,
        height: 720,
        
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        scene: []
    };

 

config.scene = [ TitleScene, Phone, Arena, EndScreen ]; 
config.physics = { default:'arcade' };

const game = new Phaser.Game(config); 