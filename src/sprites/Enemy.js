export class Enemy extends Phaser.Physics.Arcade.Sprite {
constructor(scene, position) {
const rand = Phaser.Math.Between(0,3);
//if(rand === 1){
   super(scene, position.x, position.y, 'enemy1'); 
//}
//else{super(scene, position.x, position.y, 'player1'); }
this.depth = 2;


scene.add.existing(this);
scene.physics.add.existing(this);
this.body.velocity.x = 0;
this.anims.play('enemy-idle',true);

}

}