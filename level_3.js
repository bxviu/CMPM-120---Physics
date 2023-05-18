class LevelThree extends LevelScene
{
    constructor(){
        super("LevelThree");
    }
    preload ()
    {   
        super.preload();
    }

    create ()
    {   
        super.create();
        this.currentLevel = "LevelThree";
        this.nextLevel = "MainMenu";

        console.log(this);


        let instructions = this.add.text(200, 200, "Extra Stuff:\nPress the Down Arrow to toggle bow stream cheat\nPress the Up Arrow to reset the level\nPress the Right Arrow to have your shots instantly charge\nThere is no Konami Code unfortunately", {font: "bold 25px Arial", fill: "#ffffff"});
        this.events.on("levelEnd", (param) => {
            instructions.setText("");
          });


        // this.humanoids.push(this.constructHumanoid(750+400, 100, this.scale, false, 3, true, 1000, 4));
        // this.humanoids.push(this.constructHumanoid(850+600, 700, this.scale+0.2, false, 5, true, 2000, 2));
        // this.humanoids.push(this.constructHumanoid(950+200, 500, this.scale-0.3, false, 2, true, 3000, 3));
        // this.humanoids.push(this.constructHumanoid(1000+700, 300, this.scale-0.5, false, 1, true, 4000, 1));
        this.humanoids.push(this.constructHumanoid(850+400, 400, this.scale+0.5, false, 9, true, 5000, 5));
        
        let weirdAmalgamX = 1700;
        let weirdAmalgamY = 600;
        let weirdAmalgamScale = this.scale-0.6;
        let humanoidCount = 10;//Math.random()*10+1;
        for (let count = 0; count < humanoidCount; count++) {
            // let difficulty = Math.random();
            this.humanoids.push(this.constructHumanoid(weirdAmalgamX-count, weirdAmalgamY, weirdAmalgamScale, false, 1, true, Math.random()*500 + 750, Math.random()*2+10));
        // this.humanoids.push(this.constructHumanoid(Math.random()*1400+100, Math.random()*900, this.scale+(difficulty-0.5), false, Math.floor(difficulty*5)+1));
        }
    }
}