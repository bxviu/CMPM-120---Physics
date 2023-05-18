// class Example extends LevelScene
// {
//     constructor(){
//         super("Ex");
//         this.startTime = 0;
//         this.sceneDuration = 0;
//     }
//     preload ()
//     {   
//         super.preload();
//         // this.load.path = './assets/';
//         // this.load.image("arrow", "arrow.png");
//         // this.load.image("bow", "bow.png");
//         // this.load.image("aOpponentHead", "armoredOpponent-head.png");
//         // this.load.image("aOpponentBody", "armoredOpponent-body.png");
//         // this.load.image("aOpponentShortLimb", "armoredOpponent-shortLimb.png");
//         // this.load.image("aOpponentLongLimb", "armoredOpponent-longLimb.png");
//         // this.load.plugin('rexroundrectangleplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexroundrectangleplugin.min.js', true);
//         // this.load.plugin('rexkawaseblurpipelineplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexkawaseblurpipelineplugin.min.js', true);

//     }

//     // init(data) {
//     //     // console.log(data);
//     //     this.data = data;
//     // }

//     create ()
//     {   
//         this.startTime = this.sys.game.loop.time;
//         this.scale = this.data.scale != null ? this.data.scale : 1.5;
//         let playerItems = this.createPlayer(1700, 800, Math.abs(this.scale));
//         this.bow = playerItems.playerContainer;
//         this.player = playerItems.player;
//         console.log(this.playerContainer);
//         // this.aimArrow = playerItems.aimArrow;
//         // console.log(playerItems.aimArrow);

//         // this.bow = playerItems.bow;
//         // console.log(playerItems);
//         // this.aimArrow = this.matter.add.image(1500, 400, 'arrow', null);
//         // console.log(this.aimArrow);
//         this.spawnedArrows = [];

//         // this.aimArrow.setStatic(true);
//         // this.bow = this.matter.add.image(1500, 400, 'bow', null);
//         // this.bow.setStatic(true);

//         let ground = this.matter.add.rectangle(400, 1000, 2000, 100, { isStatic: true });
//         let wall = this.matter.add.rectangle(0, 200, 100, 1500, { isStatic: true });


//         // this.aimArrow.setScale(0.2 * this.scale);
//         // this.bow.setScale(0.2 * this.scale);
//         console.log(this);

//         // this.matter.add.mouseSpring();
//         let {mousex,mousey,isDown} = this.input.activePointer;
//         this.mousex = mousex;
//         this.mousey = mousey;
//         // this.input.on('pointerdown', (event) => {
//         // });

//         this.humanoids = [] 

//         // this.humanoids.push(this.constructHumanoid(400, 100, this.scale, false, 3));
//         // this.humanoids.push(this.constructHumanoid(600, 700, this.scale+0.2, false, 5));
//         // this.humanoids.push(this.constructHumanoid(200, 500, this.scale-0.3, false, 2));
//         // this.humanoids.push(this.constructHumanoid(700, 300, this.scale-0.5, false, 1));
//         // this.humanoids.push(this.constructHumanoid(400, 400, this.scale+0.5, false, 25));

//         let humanoidCount = Math.random()*10+1;
//         for (let count = 0; count < humanoidCount; count++) {
//             let difficulty = Math.random();
//             this.humanoids.push(this.constructHumanoid(Math.random()*1400+100, Math.random()*900, this.scale+(difficulty-0.5), false, Math.floor(difficulty*5)+1));
//         }
//         // console.log(this.person);
        
        
//         let down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
//         let up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
//         this.maxCharge = false;
//         down.on('down', () => {
//             this.maxCharge = !this.maxCharge;
//         });
//         up.on('up', () => {
//                 this.scene.restart({"scale":1});
//             });
//         this.chargeTime = 0;
//         this.chargeDisplay = this.add.text(0, 0, "Charge: 0", {font: "20px Arial", fill: "#ffff00"});
//         this.reset = false;
//         this.arrowsShot = 0;
//         this.arrowsHit = 0;
//         // console.log(this.arrowsHit);
//         this.events.removeListener("arrowHit");
//         this.events.on("arrowHit", (param) => {
//             this.arrowsHit = this.arrowsHit + param;
//             // console.log(this.arrowsHit);
//           });
//         this.canCharge = this.data.canCharge != null ? this.data.canCharge : true;
//         this.input.on('pointerup', (event) => {
//             this.canCharge = true;
//         });
//     }

//     update() {
//         if (!this.reset) {
//             this.sceneDuration = this.sys.game.loop.time - this.startTime;
//         }
//         let {x,y,isDown} = this.input.activePointer;
//         this.mousex = x;
//         this.mousey = y;
//         if (isDown && this.canCharge) {
//             if (this.maxCharge) {
//                 this.chargeTime = 100;
//                 this.shootArrow(this.chargeTime+10/this.scale, this.scale, this.bow, this.mousex, this.mousey, this.spawnedArrows);
//                 this.arrowsShot += 1;
//                 this.chargeTime = 0;
//                 this.chargeDisplay.setText("Charge: " + this.chargeTime);
//             }
//             if (this.chargeTime < 100) {
//                 this.chargeTime = this.chargeTime == 0 ? 1 : this.chargeTime * 1.1;
//                 if (this.chargeTime > 100) {
//                     this.chargeTime = 100;
//                 }
//                 this.chargeDisplay.setText("Charge: " + this.chargeTime);
//             }            
//         }
//         else if (this.chargeTime > 0) {
//             this.shootArrow(this.chargeTime+10/this.scale, this.scale, this.bow, this.mousex, this.mousey, this.spawnedArrows);
//             this.arrowsShot += 1;
//             this.chargeTime = 0;
//             this.chargeDisplay.setText("Charge: " + this.chargeTime);
//         }

//         const angle = Phaser.Math.Angle.Between(this.bow.x, this.bow.y, this.mousex, this.mousey);
//         // this.aimArrow.rotation = angle;
//         this.bow.rotation = angle;
//         // this.bow.rotation = angle;
//         let humanoidsDefeated = true;
//         this.humanoids.forEach(humanoid => {
//             this.checkArrowCollisions(this.spawnedArrows, humanoid);
//             if (humanoid.health > 0) {
//                 humanoidsDefeated = false;
//             }
//         });
//         if (humanoidsDefeated && !this.reset) {
//             this.reset = true;
//             let delta = 0;
//             this.tweens.addCounter({
//                 from: 0,
//                 to: 1000,
//                 onUpdate: (tween) => {
//                     if (delta == 0) {
//                         delta = tween.getValue();
//                     }
//                     else {
//                         // delta = tween.getValue() - delta;
//                         delta = Math.abs(delta-tween.getValue());
//                     }
//                     // console.log(tween.getValue());
//                     // console.log(delta);
//                     for (let iterations = 0; iterations < delta/(200/this.scale+0.2); iterations++) {
//                         this.matter.world.engine.timing.timeScale = this.matter.world.engine.timing.timeScale > 0.001 ? this.matter.world.engine.timing.timeScale * 0.975 : 0.001;
//                     }
//                     // console.log(this.matter.world.engine.timing.timeScale);
//                 }
//             });
//             // console.log(this.arrowsHit);
//             this.time.delayedCall(5000, ()=>{
//                 var pipelineInstance = this.plugins.get('rexkawaseblurpipelineplugin').add(this.cameras.main, {
//                     blur: 5,
//                     quality: 3
//                 });
//                 // this.scene.transition({
//                 //     target: 'SummaryScene',
//                 //     duration: 2000,
//                 //     moveBelow: true,
//                 //     onUpdate: this.transitionOut,
//                 //     data: { x: 400, y: 300, arrowsHit: this.arrowsHit, arrowsShot: this.arrowsShot }
//                 // });
//                 this.scene.launch('SummaryScene', {
//                     arrowsHit: this.arrowsHit, 
//                     arrowsShot: this.arrowsShot, 
//                     health: this.player.health, 
//                     maxHealth: 3, 
//                     duration: this.sceneDuration
//                 });
//                 this.scene.pause();
//                 // this.time.delayedCall(0, ()=>{
//                 //     this.scene.restart({"scale":1});
//                 // });
//             });
//         }
//     }
// }
 

const game = new Phaser.Game({
    type: Phaser.AUTO,
    backgroundColor: '#2beaff',
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: true,
            // debug: true,
            gravity: {
                y: 0.3
            }
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [MainMenu, SummaryScene, LevelOne, LevelTwo, LevelThree,TimedLevel, Credits],
    title: "Physics Game",
});
