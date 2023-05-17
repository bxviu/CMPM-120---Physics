class Example extends LevelScene
{
    constructor(){
        super("Ex");
    }
    preload ()
    {   
        super.preload();
        // this.load.path = './assets/';
        this.load.image("arrow", "arrow.png");
        this.load.image("bow", "bow.png");
        // this.load.image("aOpponentHead", "armoredOpponent-head.png");
        // this.load.image("aOpponentBody", "armoredOpponent-body.png");
        // this.load.image("aOpponentShortLimb", "armoredOpponent-shortLimb.png");
        // this.load.image("aOpponentLongLimb", "armoredOpponent-longLimb.png");
    }

    // init(data) {
    //     // console.log(data);
    //     this.data = data;
    // }

    create ()
    {   
        // https://labs.phaser.io/edit.html?src=src/physics/matterjs/basic%20constraint.js
        // const text = this.add.text(100, 0, 'Phaser 3', { font: '32px Arial', fill: '#00ff00' });
        // const text2 = this.add.text(100, -100, 'Phaser 3', { font: '32px Arial', fill: '#ffff00' });

        // const matterText = this.matter.add.gameObject(text, { shape: { type: 'polygon', sides: 8, radius: 64 } }).setFrictionAir(0.001).setBounce(0.9);
        // const matterText2 = this.matter.add.gameObject(text2).setFrictionAir(0.001).setBounce(0.9);



        this.aimArrow = this.matter.add.image(1500, 400, 'arrow', null);
        this.spawnedArrows = [];

        this.aimArrow.setStatic(true);
        this.bow = this.matter.add.image(1500, 400, 'bow', null);
        this.bow.setStatic(true);

        let ground = this.matter.add.rectangle(400, 1000, 2000, 100, { isStatic: true });
        let wall = this.matter.add.rectangle(0, 200, 100, 1500, { isStatic: true });

        this.scale = this.data.scale != null ? this.data.scale : 1;

        this.aimArrow.setScale(0.2 * this.scale);
        this.bow.setScale(0.2 * this.scale);
        console.log(this);

        // this.matter.add.mouseSpring();
        let {mousex,mousey,isDown} = this.input.activePointer;
        this.mousex = mousex;
        this.mousey = mousey;
        // this.input.on('pointerdown', (event) => {
        // });

        this.humanoids = [] 

        this.humanoids.push(this.constructHumanoid(400, 100, this.scale, false, 3));
        this.humanoids.push(this.constructHumanoid(600, 700, this.scale, false, 3));
        this.humanoids.push(this.constructHumanoid(200, 500, this.scale, false, 3));
        // console.log(this.person);
        
        
        // let down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        // let up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        // down.on('down', () => {
        // });
        // up.on('up', () => {
        //         this.scene.restart({"scale":1});
        //     });
        this.chargeTime = 0;
        this.chargeDisplay = this.add.text(0, 0, "Charge: 0", {font: "20px Arial", fill: "#ffff00"});
        this.reset = false;
    }

    update() {
        let {x,y,isDown} = this.input.activePointer;
        this.mousex = x;
        this.mousey = y;
        if (isDown) {
            if (this.chargeTime < 100) {
                this.chargeTime = this.chargeTime == 0 ? 1 : this.chargeTime * 1.1;
                if (this.chargeTime > 100) {
                    this.chargeTime = 100;
                }
                this.chargeDisplay.setText("Charge: " + this.chargeTime);
            }            
        }
        else if (this.chargeTime > 0) {
            this.shootArrow(this.chargeTime+10/this.scale, this.scale, this.aimArrow, this.mousex, this.mousey, this.spawnedArrows);
            this.chargeTime = 0;
            this.chargeDisplay.setText("Charge: " + this.chargeTime);
        }

        const angle = Phaser.Math.Angle.Between(this.aimArrow.x, this.aimArrow.y, this.mousex, this.mousey);
        this.aimArrow.rotation = angle;
        this.bow.rotation = angle;
        let humanoidsDefeated = true;
        this.humanoids.forEach(humanoid => {
            this.checkArrowCollisions(this.spawnedArrows, humanoid);
            if (humanoid.health > 0) {
                humanoidsDefeated = false;
            }
        });
        if (humanoidsDefeated && !this.reset) {
            this.reset = true;
            this.time.delayedCall(3000, ()=>{
                this.scene.launch('SummaryScene');
                this.scene.pause();
                // this.scene.restart({"scale":1});
            });
        }
    }
}

class SummaryScene extends Phaser.Scene {
    // ... summary scene code ...
    constructor(){
        super("SummaryScene");
    }
    preload ()
    {   
    }
    create() {
        const text = this.add.text(100, 0, 'test', { font: '50px Arial', fill: '#00ff00' });
        this.time.delayedCall(2000, ()=>{
            this.closeSummary();
            // this.scene.stop('SummaryScene');
            // this.scene.resume('Ex'); 
        });
    }
    update() {
    }

  
    // Function to close the summary and resume the main scene
    closeSummary() {
      this.scene.stop('SummaryScene');
    //   this.scene.resume('Ex'); // Resume the main scene (optional)
      this.scene.start("Ex", {"scale":1.5});
    }
  }
  

const game = new Phaser.Game({
    type: Phaser.AUTO,
    backgroundColor: '#1b1464',
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: true,
            debug: true,
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
    scene: [Example,SummaryScene],
    title: "Physics Game",
});
