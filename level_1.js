class LevelOne extends LevelScene
{
    constructor(){
        super("LevelOne");
    }
    preload ()
    {   
        super.preload();
    }

    create ()
    {   
        super.create();
        this.currentLevel = "LevelOne";
        this.nextLevel = "LevelTwo";

        let playerItems = this.createPlayer(1700, 800, Math.abs(this.scale));
        this.bow = playerItems.playerContainer;
        this.player = playerItems.player;
        
        let ground = this.matter.add.rectangle(400, 1000, 2000, 100, { isStatic: true });
        let wall = this.matter.add.rectangle(0, 200, 100, 1500, { isStatic: true });

        console.log(this);

        // this.humanoids.push(this.constructHumanoid(400, 100, this.scale, false, 3));
        // this.humanoids.push(this.constructHumanoid(600, 700, this.scale+0.2, false, 5));
        // this.humanoids.push(this.constructHumanoid(200, 500, this.scale-0.3, false, 2));
        // this.humanoids.push(this.constructHumanoid(700, 300, this.scale-0.5, false, 1));
        // this.humanoids.push(this.constructHumanoid(400, 400, this.scale+0.5, false, 25));

        let humanoidCount = Math.random()*10+1;
        for (let count = 0; count < humanoidCount; count++) {
            let difficulty = Math.random();
            this.humanoids.push(this.constructHumanoid(Math.random()*1400+100, Math.random()*900, this.scale+(difficulty-0.5), false, Math.floor(difficulty*5)+1));
        }
        
    }

    // update() {
    //     if (!this.reset) {
    //         this.sceneDuration = this.sys.game.loop.time - this.startTime;
    //     }
    //     let {x,y,isDown} = this.input.activePointer;
    //     this.mousex = x;
    //     this.mousey = y;
    //     if (isDown && this.canCharge) {
    //         if (this.maxCharge) {
    //             this.chargeTime = 100;
    //             this.shootArrow(this.chargeTime+10/this.scale, this.scale, this.bow, this.mousex, this.mousey, this.spawnedArrows);
    //             this.arrowsShot += 1;
    //             this.chargeTime = 0;
    //             this.chargeDisplay.setText("Charge: " + this.chargeTime);
    //         }
    //         if (this.chargeTime < 100) {
    //             this.chargeTime = this.chargeTime == 0 ? 1 : this.chargeTime * 1.1;
    //             if (this.chargeTime > 100) {
    //                 this.chargeTime = 100;
    //             }
    //             this.chargeDisplay.setText("Charge: " + this.chargeTime);
    //         }            
    //     }
    //     else if (this.chargeTime > 0) {
    //         this.shootArrow(this.chargeTime+10/this.scale, this.scale, this.bow, this.mousex, this.mousey, this.spawnedArrows);
    //         this.arrowsShot += 1;
    //         this.chargeTime = 0;
    //         this.chargeDisplay.setText("Charge: " + this.chargeTime);
    //     }

    //     const angle = Phaser.Math.Angle.Between(this.bow.x, this.bow.y, this.mousex, this.mousey);
    //     this.bow.rotation = angle;
    //     let humanoidsDefeated = true;
    //     this.humanoids.forEach(humanoid => {
    //         this.checkArrowCollisions(this.spawnedArrows, humanoid);
    //         if (humanoid.health > 0) {
    //             humanoidsDefeated = false;
    //         }
    //     });
    //     if (humanoidsDefeated && !this.reset) {
    //         this.reset = true;
    //         let delta = 0;
    //         this.tweens.addCounter({
    //             from: 0,
    //             to: 1000,
    //             onUpdate: (tween) => {
    //                 if (delta == 0) {
    //                     delta = tween.getValue();
    //                 }
    //                 else {
    //                     // delta = tween.getValue() - delta;
    //                     delta = Math.abs(delta-tween.getValue());
    //                 }
    //                 for (let iterations = 0; iterations < delta/(200/this.scale+0.2); iterations++) {
    //                     this.matter.world.engine.timing.timeScale = this.matter.world.engine.timing.timeScale > 0.001 ? this.matter.world.engine.timing.timeScale * 0.975 : 0.001;
    //                 }
    //             }
    //         });
    //         this.time.delayedCall(5000, ()=>{
    //             var pipelineInstance = this.plugins.get('rexkawaseblurpipelineplugin').add(this.cameras.main, {
    //                 blur: 5,
    //                 quality: 3
    //             });
    //             // this.scene.transition({
    //             //     target: 'SummaryScene',
    //             //     duration: 2000,
    //             //     moveBelow: true,
    //             //     onUpdate: this.transitionOut,
    //             //     data: { x: 400, y: 300, arrowsHit: this.arrowsHit, arrowsShot: this.arrowsShot }
    //             // });
    //             this.scene.launch('SummaryScene', {
    //                 arrowsHit: this.arrowsHit, 
    //                 arrowsShot: this.arrowsShot, 
    //                 health: this.player.health, 
    //                 maxHealth: 3, 
    //                 duration: this.sceneDuration,
    //                 currentLevel: 'LevelOne',
    //                 nextLevel: 'LevelTwo'
    //             });
    //             this.scene.pause();
    //         });
    //     }
    // }
}