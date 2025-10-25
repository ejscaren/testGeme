import {Player} from "../sprites/Player.js";
import { Enemy } from "../sprites/Enemy.js";
import {thing} from "../state/idk.js";
import {sendStuff} from "../services/getStuff.js";
import { Bomb } from "../sprites/Bomb.js";
import { Heart } from "../sprites/Heart.js";


 export class Arena extends Phaser.Scene {

    constructor(){
        super('play');
    }
    
    preload(){
    this.load.image( 'arena', 'src/assets/arena.png');
    this.load.image( 'player1', 'src/assets/defaultChar.png');
    this.load.image( 'player2', 'src/assets/defaultChar2.png');
    this.load.image( 'frameUp1', 'src/assets/frameUp1.png' ); 
    this.load.image( 'frameUp2', 'src/assets/frameUp2.png' );
    this.load.image( 'frameDown1', 'src/assets/frameDown1.png' ); 
    this.load.image( 'frameDown2', 'src/assets/frameDown2.png' );
    this.load.image( 'frameRight1', 'src/assets/frameRight1.png' ); 
    this.load.image( 'frameRight2', 'src/assets/frameRight2.png' );
    this.load.image( 'frameLeft1', 'src/assets/frameLeft1.png' ); 
    this.load.image( 'frameLeft2', 'src/assets/frameLeft2.png' );
    this.load.image( 'projectile', 'src//assets/projectile.png' );
    this.load.image( 'bomb', 'src//assets/bomb.png' );
    this.load.image( 'heart', 'src//assets/heart.png' );
    this.load.image( 'enemy1', 'src/assets/enemy1.png' );
    this.load.image( 'enemy2', 'src/assets/enemy1.png' );
    }
    
    create(){
   
    this.background = this.add.tileSprite(1297/2, 728/2, 1297, 728, 'arena');
    

    this.create_animations();
    
    this.diffChange=50;

    //enemies
    this.enemies = [];
    this.enemySpeed = 100;
    const event = new Object();
    event.delay = 670;
    event.callback = this.spawn_enemy;
    event.callbackScope = this;
    event.loop = true;
    this.time.addEvent(event, this);
    

    //player
    this.player_projectiles = [];
    this.player_abilityProjectiles = [];
    this.player = new Player(this);
    this.health = 3;
    this.healthText = this.add.text(1168,32,"")    
    this.healthText.depth = 3;
    this.score_text = this.add.text(32, 32, "");
    this.score_text.depth = 3;
    this.score_text.setColor( 'rgb(255,255,255)' );
    this.hearts = [];
    this.bombs = []
    const event2 = new Object();
    event2.delay = 20000;
    event2.callback = this.createBomb;
    event2.callbackScope = this;
    event2.loop = true;
    this.time.addEvent(event2, this);
    const event3 = new Object();
    event3.delay = 10000;
    event3.callback =  this.createHeart;
    event3.callbackScope = this;
    event3.loop = true;
    this.time.addEvent(event3, this);
    

    //collision
    this.physics.add.overlap(this.player,this.enemies,this.game_over,null,this);
    this.physics.add.overlap(this.player_projectiles,this.enemies,this.killEnemy,null,this);
    this.physics.add.overlap(this.player_abilityProjectiles,this.enemies,this.killEnemy,null,this);
    this.physics.add.overlap(this.player,this.bombs,this.collectBomb,null,this);
    this.physics.add.overlap(this.player,this.hearts,this.collectHeart,null,this);
    

  }

  createBomb(){
    const config = {}
    config.x = Phaser.Math.Between(0,1280);
    config.y = Phaser.Math.Between(0,720);
    const bomb = new Bomb(this,config);
    this.bombs.push(bomb);
  }

  collectBomb(player, bomb){
    for(let i = 0; i < this.enemies.length-1; i++){
   
        this.temp = this.enemies[i];
        this.enemies.splice(i, 1);
        this.temp.destroy();
        thing.score++;
   
   }
   bomb.destroy();
  }

  createHeart(){
    const config = {}
    config.x = Phaser.Math.Between(0,1280);
    config.y = Phaser.Math.Between(0,720);
    const heart = new Heart(this,config);
    this.hearts.push(heart);
  }

  collectHeart(player, heart){
    heart.destroy();
    this.health++;
  }


  killEnemy(projectile, enemy){
    
   for(let i = 0; i < this.enemies.length; i++){
    if(this.enemies[i] == enemy){
        this.enemies.splice(i, 1);
        
    }
   
   }
   thing.score++;
    enemy.destroy();
  }

  



spawn_enemy(){
  const config = {};
    this.rand = Phaser.Math.Between(1, 3);
    
    //left
    if(this.rand === 1){
    config.x = 0;
    config.y = Phaser.Math.Between(0, this.game.config.height);
    }
    //top
    if(this.rand === 2){
    config.x = Phaser.Math.Between(0, this.game.config.width);
    config.y = 0;
    }
    //right
    if(this.rand === 3){
    config.x = 1280;
    config.y = Phaser.Math.Between(0, this.game.config.height);
    }
    
    //console.log(this.rand);

    const monster = new Enemy(this, config);
    
    this.enemies.push(monster);
    
    
}

  makeFolow(){
    for(let i = 0; i < this.enemies.length; i++){
        this.physics.moveToObject(this.enemies[i], this.player, this.enemySpeed);
    }

    for(let i = 0; i < this.player_projectiles; i++){
        this.physics.moveToObject(this.player_projectiles[i], this.enemies[0], 200);
    }

  }

    game_over(player,enemy){
    this.health--;
     if(this.health == 0){
        const playerStuff = {
            name: thing.name,
            score: thing.score

        }
        sendStuff(playerStuff);
        thing.score = 0;
        localStorage.setItem('score', thing.score);
        this.scene.start('end');
}   
    for(let i = 0; i < this.enemies.length; i++){
    if(this.enemies[i] == enemy){
        this.enemies.splice(i, 1);
        
    }
   
   }
    
    enemy.destroy();

}//end game over

moreDifficult(){
    if(this.diffChange <= thing.score){
        this.diffChange += 50;
       this.enemySpeed+=20;
    }
}
  
  
update(time){
    localStorage.setItem('score', thing.score);
    this.makeFolow();
    this.player.move();
    this.player.attack(time);
    this.player.ability(time);
    this.score_text.setText("Kills: " + thing.score);
    this.healthText.setText("Lives: " + this.health);
    this.moreDifficult();
    
    }

create_animations(scene){
if ( !this.anims.exists('enemy-idle') ){
const anim_player_move = new Object();
anim_player_move.key = 'enemy-idle'; 
anim_player_move.frames = [{key: 'enemy1'}, {key: 'enemy2'}]; 
anim_player_move.frameRate = 6; 
anim_player_move.repeat = -1;
this.anims.create(anim_player_move); 
}

    if ( !this.anims.exists('player-idle') ){
const anim_player_move = new Object();
anim_player_move.key = 'player-idle'; 
anim_player_move.frames = [{key: 'player1'}, {key: 'player2'}]; 
anim_player_move.frameRate = 6; 
anim_player_move.repeat = -1;
this.anims.create(anim_player_move); 
}

    if ( !this.anims.exists('player-moveUp') ){
const anim_player_move = new Object();
anim_player_move.key = 'player-moveUp'; 
anim_player_move.frames = [{key: 'frameUp1'}, {key: 'frameUp2'}]; 
anim_player_move.frameRate = 6; 
anim_player_move.repeat = -1; 
this.anims.create(anim_player_move); 
}

    if ( !this.anims.exists('player-moveDown') ){
const anim_player_move = new Object();
anim_player_move.key = 'player-moveDown'; 
anim_player_move.frames = [{key: 'frameDown1'}, {key: 'frameDown2'}]; 
anim_player_move.frameRate = 6; 
anim_player_move.repeat = -1; 
this.anims.create(anim_player_move); 
}

 if ( !this.anims.exists('player-moveRight') ){
const anim_player_move = new Object();
anim_player_move.key = 'player-moveRight'; 
anim_player_move.frames = [{key: 'frameRight1'}, {key: 'frameRight2'}]; 
anim_player_move.frameRate = 6; 
anim_player_move.repeat = -1; 
this.anims.create(anim_player_move); 
}

 if ( !this.anims.exists('player-moveLeft') ){
const anim_player_move = new Object();
anim_player_move.key = 'player-moveLeft'; 
anim_player_move.frames = [{key: 'frameLeft1'}, {key: 'frameLeft2'}];
anim_player_move.frameRate = 6; 
anim_player_move.repeat = -1; 
this.anims.create(anim_player_move); 
}


  }


}//end arena




 