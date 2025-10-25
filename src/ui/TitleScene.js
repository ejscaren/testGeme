
import fullJoke from "../services/getJoke.js";
import stuff from "../services/getStuff.js";
import {thing} from "../state/idk.js";
export class TitleScene extends Phaser.Scene {



constructor() {
super('title'); 
}
preload(){
    this.load.image( 'background', 'src/assets/background1.jpg');
}

create() {
//this.background = this.add.tileSprite(1280/2, 720/2, 1280, 720, 'background');
this.checkWidthHeight();
this.start();
this.createKeys();

this.name = ""
this.count = 0;
this.mostRecentKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
const width = this.game.config.width;
const height = this.game.config.height;
this.nameTxt = this.add.text(width / 2, height *.5, 'Enter Name: ' + this.name, {
fontSize: '0px',
fill: '#FFFFFF'
}).setOrigin(0.5);

if(thing.name === null){
this.nameTxt.setFontSize('24px');
}
else{

this.add.text(width / 2, height *.5, 'Logged in as: ' + thing.name, {
fontSize: '24px',
fill: '#FFFFFF'
}).setOrigin(0.5);
}


this.add.text(width / 2, height *.20, 'Go Berserk', {
fontSize: '200px',
fill: '#FFFFFF'
}).setOrigin(0.5);

this.add.text(width / 2, height *.37, 'Arrows Move | Spacebar to Fire | Numbers for Ablilites', {
fontSize: '24px',
fill: '#FFFFFF',
align: 'center' 
}).setOrigin(0.5);
this.add.text(width / 2, height * 2 / 3, 'Top 3 High Scores', {
fontSize: '24px',
fill: '#6200ffff'
}).setOrigin(0.5);


this.add.text(width / 2, height * .8 , 'Start new game with Enter', {
fontSize: '24px',
fill: '#6200ffff'
}).setOrigin(0.5);

this.add.text(width / 2, height * .86 , fullJoke, {
fontSize: '24px',
fill: '#ff0000ff'
}).setOrigin(0.5);


//start game
this.input.keyboard.on('keydown-ENTER', () => { 

if(thing.name === null){
thing.name = this.name;
localStorage.setItem('name', thing.name);
}
  this.scene.start('play'); });

  //logout
this.input.keyboard.on('keydown-ONE', () => {
    thing.name = null;
    thing.score = 0;
    localStorage.setItem('name', null);
    localStorage.setItem('score', null);
    this.scene.start('title') });

}// end create

start =  () => {    
  this.add.text(1297 / 2, 728 * .70, `${stuff.record[0].name}: ${stuff.record[0].score}`).setOrigin(0.5);
  this.add.text(1297 / 2, 728 * .72, `${stuff.record[1].name}: ${stuff.record[1].score}`).setOrigin(0.5);
  this.add.text(1297 / 2, 728 * .74, `${stuff.record[2].name}: ${stuff.record[2].score}`).setOrigin(0.5);
      
}

update(time){
this.nameTxt.setText('Enter Name: ' + this.name);
this.keyboard();
this.checkWidthHeight();
}

checkWidthHeight(){
    if(window.innerHeight > window.innerWidth){
        this.scene.start('phone');
    }
}


keyboard(){
//count must be outside due to update

if(this.keyA.isDown && this.count == 0){
    this.mostRecentKey = this.keyA;
    this.name += "A";
    this.count = 1;
}

if(this.keyB.isDown && this.count == 0){
    this.mostRecentKey = this.keyB;
    this.name += "B";
    this.count = 1;
}

if(this.keyC.isDown && this.count == 0){
    this.mostRecentKey = this.keyC;
    this.name += "C";
    this.count = 1;
}

if(this.keyD.isDown && this.count == 0){
    this.mostRecentKey = this.keyD;
    this.name += "D";
    this.count = 1;
}

if(this.keyE.isDown && this.count == 0){
    this.mostRecentKey = this.keyE;
    this.name += "E";
    this.count = 1;
}

if(this.keyF.isDown && this.count == 0){
    this.mostRecentKey = this.keyF;
    this.name += "F";
    this.count = 1;
}

if(this.keyG.isDown && this.count == 0){
    this.mostRecentKey = this.keyG;
    this.name += "G";
    this.count = 1;
}

if(this.keyH.isDown && this.count == 0){
    this.mostRecentKey = this.keyH;
    this.name += "H";
    this.count = 1;
}

if(this.keyI.isDown && this.count == 0){
    this.mostRecentKey = this.keyI;
    this.name += "I";
    this.count = 1;
}

if(this.keyJ.isDown && this.count == 0){
    this.mostRecentKey = this.keyJ;
    this.name += "J";
    this.count = 1;
}

if(this.keyK.isDown && this.count == 0){
    this.mostRecentKey = this.keyK;
    this.name += "K";
    this.count = 1;
}

if(this.keyL.isDown && this.count == 0){
    this.mostRecentKey = this.keyL;
    this.name += "L";
    this.count = 1;
}

if(this.keyM.isDown && this.count == 0){
    this.mostRecentKey = this.keyM;
    this.name += "M";
    this.count = 1;
}

if(this.keyN.isDown && this.count == 0){
    this.mostRecentKey = this.keyN;
    this.name += "N";
    this.count = 1;
}

if(this.keyO.isDown && this.count == 0){
    this.mostRecentKey = this.keyO;
    this.name += "O";
    this.count = 1;
}

if(this.keyP.isDown && this.count == 0){
    this.mostRecentKey = this.keyP;
    this.name += "P";
    this.count = 1;
}

if(this.keyQ.isDown && this.count == 0){
    this.mostRecentKey = this.keyQ;
    this.name += "Q";
    this.count = 1;
}

if(this.keyR.isDown && this.count == 0){
    this.mostRecentKey = this.keyR;
    this.name += "R";
    this.count = 1;
}

if(this.keyS.isDown && this.count == 0){
    this.mostRecentKey = this.keyS;
    this.name += "S";
    this.count = 1;
}

if(this.keyT.isDown && this.count == 0){
    this.mostRecentKey = this.keyT;
    this.name += "T";
    this.count = 1;
}

if(this.keyU.isDown && this.count == 0){
    this.mostRecentKey = this.keyU;
    this.name += "U";
    this.count = 1;
}

if(this.keyV.isDown && this.count == 0){
    this.mostRecentKey = this.keyV;
    this.name += "V";
    this.count = 1;
}

if(this.keyW.isDown && this.count == 0){
    this.mostRecentKey = this.keyW;
    this.name += "W";
    this.count = 1;
}

if(this.keyX.isDown && this.count == 0){
    this.mostRecentKey = this.keyX;
    this.name += "X";
    this.count = 1;
}

if(this.keyY.isDown && this.count == 0){
    this.mostRecentKey = this.keyY;
    this.name += "Y";
    this.count = 1;
}

if(this.keyZ.isDown && this.count == 0){
    this.mostRecentKey = this.keyZ;
    this.name += "Z";
    this.count = 1;
}

if(this.keyEnter.isDown && this.count == 0){
    this.mostRecentKey = this.keyEnter;
    this.name += " ";
    this.count = 1;
}
         

if(this.mostRecentKey.isUp){
    this.count = 0;
}
}

createKeys(){
this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
this.keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
this.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
this.keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
this.keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
this.keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
this.keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
this.keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
this.keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
this.keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
this.keyN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
this.keyO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
this.keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
this.keyU = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
this.keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
this.keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
this.keyY = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);
this.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


}


}
