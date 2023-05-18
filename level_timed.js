class TimedLevel extends LevelScene
{
    constructor(){
        super("TimedLevel");
    }
    preload ()
    {   
        super.preload();
    }

    create ()
    {   
        super.create();
        this.currentLevel = "TimedLevel";
        this.nextLevel = "MainMenu";

        this.timerDisplay = this.add.text(1920/2, 100, "Time: " + (90-this.sceneDuration/1000).toFixed(2) + "s", {font: "40px Arial", fill: "#FFFFFF"});
        this.timerDisplay.setOrigin(0.5, 0.5);
        console.log(this);
        // this.humanoids.push(this.constructHumanoid(750+400, 100, this.scale, false, 3, true, 1000, 4));
        // this.humanoids.push(this.constructHumanoid(850+600, 700, this.scale+0.2, false, 5, true, 2000, 2));
        // this.humanoids.push(this.constructHumanoid(950+200, 500, this.scale-0.3, false, 2, true, 3000, 3));
        // this.humanoids.push(this.constructHumanoid(1000+700, 300, this.scale-0.5, false, 1, true, 4000, 1));
        // this.humanoids.push(this.constructHumanoid(850+400, 400, this.scale+0.5, false, 9, true, 5000, 5));
        this.nextWave();


        // let weirdAmalgamX = 1700;
        // let weirdAmalgamY = 600;
        // let weirdAmalgamScale = this.scale-0.6;
        // let humanoidCount = 10;//Math.random()*10+1;
        // for (let count = 0; count < humanoidCount; count++) {
        //     // let difficulty = Math.random();
        //     this.humanoids.push(this.constructHumanoid(weirdAmalgamX-count, weirdAmalgamY, weirdAmalgamScale, false, 1, true, Math.random()*500 + 750, Math.random()*2+10));
        // // this.humanoids.push(this.constructHumanoid(Math.random()*1400+100, Math.random()*900, this.scale+(difficulty-0.5), false, Math.floor(difficulty*5)+1));
        // }
    }

    update(time, delta){
        super.update(time, delta);
        this.timerDisplay.setText("Time: " + (90-this.sceneDuration/1000).toFixed(2) + "s");
        if (90-this.sceneDuration/1000 < 0 && !this.reset) {
            this.events.emit("levelEnd", {victory:true});
            this.reset = true;
            let count = 0
            this.humanoids.forEach(humanoid => {
                if (humanoid.health <= 0) {
                    count = count + 1;
                }
            });
            this.kills = count;
            this.addSlowdown();
            this.time.delayedCall(5000, ()=>{
                this.showSummary();
            });
        }
        let remaining = 0;
        this.humanoids.forEach(humanoid => {
            if (humanoid.health > 0) {
                remaining = remaining + 1;
            }
        });
        if (remaining < 2) {
            console.log(this.humanoids)
            this.nextWave();
        }
    }

    nextWave() {
        let humanoidCount = Math.random()*10+5;
        let amalgamSpawned = Math.random() < 0.3;
        if (amalgamSpawned) {
            let weirdAmalgamX = Math.random()*1400 +500;
            let weirdAmalgamY = Math.random()*900 +100;
            let weirdAmalgamScale = Math.random()+0.2;
            for (let count = 0; count < humanoidCount; count++) {
                this.humanoids.push(this.constructHumanoid(weirdAmalgamX-count, weirdAmalgamY, weirdAmalgamScale, false, 1, true, Math.random()*500 + 750, Math.random()*10+25));
            }
        }

        humanoidCount = amalgamSpawned ? Math.random()*2 : Math.random()*4+2;
        for (let count = 0; count < humanoidCount; count++) {
            let difficulty = Math.random();
            this.humanoids.push(this.constructHumanoid(Math.random()*1400+500, Math.random()*900+100, this.scale+(difficulty-0.5), false, Math.floor(difficulty*5)+1, true, Math.random()*5000 + 750, Math.random()*14+1));
        }

    }
}