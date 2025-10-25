import { Projectile } from "./Projectile.js";


export class Player extends Phaser.Physics.Arcade.Sprite {
constructor(scene) {
super(scene, 300, 200, 'player');
this.depth = 2;
this.speed = 200;
this.last_fired = 0;
this.last_ability = 0;
this.projectiles = scene.player_projectiles;
this.abilityProjectiles = scene.player_abilityProjectiles;
this.projectileScale = 1;



scene.add.existing(this);
scene.physics.add.existing(this);
this.setCollideWorldBounds(true); 
this.body.setSize(this.width-10, this.height-2); 
this.buttons = scene.input.keyboard.addKeys('up,down,left,right,space,one,W');
this.anims.play('player-idle',true);

}

move() {

this.body.velocity.x = 0;
this.body.velocity.y = 0;

if ( this.buttons.up.isDown ) {
this.body.velocity.y = -this.speed;

this.anims.play('player-moveUp',true);

this.faceLeft = false;
this.faceRight = false;
this.faceUp = true;
this.faceDown = false;
}

if ( this.buttons.down.isDown /*&& !(this.buttons.right.isDown || this.buttons.left.isDown || this.buttons.up.isDown)*/ ) {
this.body.velocity.y = this.speed;

this.anims.play('player-moveDown',true);

this.faceLeft = false;
this.faceRight = false;
this.faceUp = false;
this.faceDown = true;
}

if ( this.buttons.left.isDown ) {
this.body.velocity.x = -this.speed;

this.anims.play('player-moveLeft',true);

this.faceLeft = true;
this.faceRight = false;
this.faceUp = false;
this.faceDown = false;
}
if ( this.buttons.right.isDown ) {
this.body.velocity.x = this.speed;

this.anims.play('player-moveRight',true);

this.faceLeft = false;
this.faceRight = true;
this.faceUp = false;
this.faceDown = false;
}


if ( this.buttons.up.isUp && this.buttons.down.isUp && this.buttons.left.isUp && this.buttons.right.isUp  ) {
    this.anims.play('player-idle',true);
}

}

attack (time) {
if( this.buttons.space.isDown && time - this.last_fired > 400 && this.faceRight==true) {
const position = {x:this.x, y:this.y};
const velocity = {x:300, y:0};
const projectile = new Projectile(this.scene, position, velocity);
projectile.setScale(this.projectileScale);
projectile.body.setSize(projectile.displayWidth, projectile.displayHeight, true);

this.projectiles.push(projectile);
this.last_fired = time;
}

if( this.buttons.space.isDown && time - this.last_fired > 400 && this.faceDown==true) {
const position = {x:this.x, y:this.y};
const velocity = {x:0, y:300};
const projectile = new Projectile(this.scene, position, velocity);
projectile.setScale(this.projectileScale);
projectile.body.setSize(projectile.displayWidth, projectile.displayHeight, true);

this.projectiles.push(projectile);
this.last_fired = time;
}

if( this.buttons.space.isDown && time - this.last_fired > 400 && this.faceUp==true) {
const position = {x:this.x, y:this.y};
const velocity = {x:0, y:-300};
const projectile = new Projectile(this.scene, position, velocity);
projectile.setScale(this.projectileScale);
projectile.body.setSize(projectile.displayWidth, projectile.displayHeight, true);

this.projectiles.push(projectile);
this.last_fired = time;
}

if( this.buttons.space.isDown && time - this.last_fired > 400 && this.faceLeft==true) {
const position = {x:this.x, y:this.y};
const velocity = {x:-300, y:0};
const projectile = new Projectile(this.scene, position, velocity);

projectile.setScale(this.projectileScale);

projectile.body.setSize(projectile.displayWidth, projectile.displayHeight, true);

this.projectiles.push(projectile);
this.last_fired = time;
}



if( this.buttons.space.isUp ) {

}

}


ability(time){
    if( this.buttons.one.isDown && time - this.last_ability > 4000 ) {

const position1 = {x:this.x, y:this.y};

/*const position1 = {x:this.x-200, y:this.y};
const position2 = {x:this.x+200, y:this.y};
const position3 = {x:this.x, y:this.y-200};
const position4 = {x:this.x, y:this.y+200};*/

/*const velocity1 = {x:0, y:0};
const velocity2 = {x:0, y:0};
const velocity3 = {x:0, y:0};
const velocity4 = {x:0, y:0};*/

const velocity1 = {x:300, y:0};
const velocity2 = {x:-300, y:0};
const velocity3 = {x:0, y:300};
const velocity4 = {x:0, y:-300};



const projectile1 = new Projectile(this.scene, position1, velocity1);
const projectile2 = new Projectile(this.scene, position1, velocity2);
const projectile3 = new Projectile(this.scene, position1, velocity3);
const projectile4 = new Projectile(this.scene, position1, velocity4);

projectile1.setScale(this.projectileScale );
projectile2.setScale(this.projectileScale );
projectile3.setScale(this.projectileScale );
projectile4.setScale(this.projectileScale );

projectile1.body.setSize(projectile1.displayWidth, projectile1.displayHeight, true);
projectile2.body.setSize(projectile2.displayWidth, projectile2.displayHeight, true);
projectile3.body.setSize(projectile3.displayWidth, projectile3.displayHeight, true);
projectile4.body.setSize(projectile4.displayWidth, projectile4.displayHeight, true);

this.abilityProjectiles.push(projectile1);
this.abilityProjectiles.push(projectile2);
this.abilityProjectiles.push(projectile3);
this.abilityProjectiles.push(projectile4);

this.last_ability = time;
}
}



}