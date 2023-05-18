class Menu extends Phaser.Scene {
    init(data) {
    }
    preload ()
    {       
        this.load.plugin('rexroundrectangleplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexroundrectangleplugin.min.js', true);
        this.load.plugin('rexkawaseblurpipelineplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexkawaseblurpipelineplugin.min.js', true);
        this.load.plugin('rexdropshadowpipelineplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexdropshadowpipelineplugin.min.js', true);

    }
    create() {
    }
    
    update() {
    }

    closeMenu(originalScene,nextScene,config) {
        this.scene.stop('SummaryScene');
        // this.scene.transition({
        //     target: 'LevelOne',
        //     duration: 2000,
        //     moveBelow: true,
        //     onUpdate: this.transitionOut,
        //     data: { x: 400, y: 300, "scale":1, "canCharge": true }
        // });
        this.scene.start(nextScene, config);
        // if (nextScene != "MainMenu") {
        if (nextScene != originalScene) {
            this.scene.stop(originalScene);
        }
    }

    // transitionOut (progress)
    // {
    //     this.cameras.main.x = (400 * progress);
    // }

    menuLeave(target, originalScene, nextScene, config) {
        this.tweens.add({
            targets: target,
            x: 3550,
            duration: 500,
            ease: 'Cubic.in',
            onComplete: () => {
                this.time.delayedCall(250, ()=>{
                    this.closeMenu(originalScene, nextScene, config);       
                });
            }   
        });
    }

  }
  