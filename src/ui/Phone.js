export class Phone extends Phaser.Scene {



constructor() {
super('phone'); 
}

create(){
this.add.text(this.game.config.width / 2, this.game.config.height /2, 'Game only works on PC with  \nkeyboard and Landscape, sorry.',{
fontSize: '40px',
fill: '#ffffffff'
}).setOrigin(.5);
}
}