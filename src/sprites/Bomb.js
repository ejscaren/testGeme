export class Bomb extends Phaser.Physics.Arcade.Sprite {
constructor(scene, position){
super(scene, position.x, position.y, 'bomb');
this.depth = 1;
scene.add.existing(this);
scene.physics.add.existing(this);

}
}