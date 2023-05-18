class LevelTwo extends LevelScene
{
    constructor(){
        super("LevelTwo");
    }
    preload ()
    {   
        super.preload();
    }

    create ()
    {   
        super.create();
        this.currentLevel = "LevelTwo";
        this.nextLevel = "LevelThree";

        let playerItems = this.createPlayer(1700, 800, Math.abs(this.scale));
        this.bow = playerItems.playerContainer;
        this.player = playerItems.player;
        // this.startTime = this.sys.game.loop.time;
        // this.scale = this.data.scale != null ? this.data.scale : 1.5;
        // let playerItems = this.createPlayer(1700, 800, Math.abs(this.scale));
        // this.bow = playerItems.playerContainer;
        // this.player = playerItems.player;
        // this.chargeTime = 0;
        // this.chargeDisplay = this.add.text(0, 0, "Charge: 0", {font: "20px Arial", fill: "#ffff00"});
        // this.reset = false;
        // this.arrowsShot = 0;
        // this.arrowsHit = 0;

        // this.spawnedArrows = [];
        // this.humanoids = [] 

        // let {mousex,mousey,isDown} = this.input.activePointer;
        // this.mousex = mousex;
        // this.mousey = mousey;

        // this.events.removeListener("arrowHit");
        // this.events.on("arrowHit", (param) => {
        //     this.arrowsHit = this.arrowsHit + param;
        //     // console.log(this.arrowsHit);
        //   });
        // this.canCharge = this.data.canCharge != null ? this.data.canCharge : true;
        // this.input.on('pointerup', (event) => {
        //     this.canCharge = true;
        // });

        console.log(this);

        let ground = this.matter.add.rectangle(400, 1000, 2000, 100, { isStatic: true });
        let wall = this.matter.add.rectangle(0, 200, 100, 1500, { isStatic: true });







        this.humanoids.push(this.constructHumanoid(400, 100, this.scale, false, 3));
        this.humanoids.push(this.constructHumanoid(600, 700, this.scale+0.2, false, 5));
        this.humanoids.push(this.constructHumanoid(200, 500, this.scale-0.3, false, 2));
        this.humanoids.push(this.constructHumanoid(700, 300, this.scale-0.5, false, 1));
        this.humanoids.push(this.constructHumanoid(400, 400, this.scale+0.5, false, 25));
        



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
    //             this.scene.launch('SummaryScene', {
    //                 arrowsHit: this.arrowsHit, 
    //                 arrowsShot: this.arrowsShot, 
    //                 health: this.player.health, 
    //                 maxHealth: 3, 
    //                 duration: this.sceneDuration,
    //                 currentLevel: 'LevelTwo',
    //                 nextLevel: 'LevelThree'
    //             });
    //             this.scene.pause();
    //         });
    //     }
    // }
}