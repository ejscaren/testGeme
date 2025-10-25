//placeholder
export const keyboard = () => {
    this.count = 0;
    this.mostRecentKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

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
         

if(this.mostRecentKey.isUp){
    this.count = 0;
}

}// END KEYBOARD

export const createKeys = () => {
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
}