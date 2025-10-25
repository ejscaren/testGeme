import {thing} from "../state/idk.js";



export class EndScreen extends Phaser.Scene {

    constructor() {
super('end'); 
}



create() {

    
const width = this.game.config.width;
const height = this.game.config.height;


this.nameText = this.add.text(width * .5, height * .8 ," ", {
fontSize: '20px',
fill: '#ffae00ff'
}).setOrigin(.5);

this.add.text(width / 2, height * .2, 'Game Over!', {
fontSize: '200px',
fill: '#FFFFFF'
}).setOrigin(0.5);

this.add.text(width / 2, height * .85 , 'Press enter when you are ready to continue.', {
fontSize: '24px',
fill: '#ffae00ff'
}).setOrigin(0.5);

this.input.keyboard.on('keydown-ENTER', () => {this.scene.start('title') });



}




}