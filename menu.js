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
        this.scene.start(nextScene, config);
        if (nextScene != originalScene) {
            this.scene.stop(originalScene);
        }
    }

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
  