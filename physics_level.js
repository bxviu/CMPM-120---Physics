class LevelScene extends Phaser.Scene {
    
    init(data) {
        // console.log(data);
        this.data = data;
        this.startTime = 0;
        this.sceneDuration = 0;
    }

    preload() {
        this.load.path = './assets/';
        this.load.image("aOpponentHead", "armoredOpponent-head.png");
        this.load.image("aOpponentBody", "armoredOpponent-body.png");
        this.load.image("aOpponentShortLimb", "armoredOpponent-shortLimb.png");
        this.load.image("aOpponentLeg", "armoredOpponent-leg.png");
        this.load.image("aOpponentArm", "armoredOpponent-arm.png");
        this.load.image("arrow", "arrow.png");
        this.load.image("bow", "bow.png");
        this.load.plugin('rexroundrectangleplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexroundrectangleplugin.min.js', true);
        this.load.plugin('rexkawaseblurpipelineplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexkawaseblurpipelineplugin.min.js', true);
        this.load.plugin('rexdropshadowpipelineplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexdropshadowpipelineplugin.min.js', true);

    }

    create() {
        let down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        let up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.maxCharge = false;
        down.on('down', () => {
            this.maxCharge = !this.maxCharge;
        });
        up.on('up', () => {
                this.scene.restart({"scale":1});
            });

        this.startTime = this.sys.game.loop.time;
        this.scale = this.data.scale != null ? this.data.scale : 1;

        this.chargeTime = 0;
        this.chargeDisplay = this.add.text(0, 0, "Charge: 0", {font: "20px Arial", fill: "#ffff00"});
        this.reset = false;
        this.arrowsShot = 0;
        this.arrowsHit = 0;

        this.spawnedArrows = [];
        this.humanoids = [] 

        let {mousex,mousey,isDown} = this.input.activePointer;
        this.mousex = mousex;
        this.mousey = mousey;

        this.events.removeListener("arrowHit");
        this.events.on("arrowHit", (param) => {
            this.arrowsHit = this.arrowsHit + param;
            // console.log(this.arrowsHit);
          });
        this.canCharge = true; //this.data.canCharge != null ? this.data.canCharge : true;
        this.input.on('pointerup', (event) => {
            this.canCharge = true;
        });
    }

    update() {
        if (!this.reset) {
            this.sceneDuration = this.sys.game.loop.time - this.startTime;
        }
        let {x,y,isDown} = this.input.activePointer;
        this.mousex = x;
        this.mousey = y;
        if (isDown && this.canCharge) {
            if (this.maxCharge) {
                this.chargeTime = 100;
                this.shootArrow(this.chargeTime+10/this.scale, this.scale, this.bow, this.mousex, this.mousey, this.spawnedArrows);
                this.arrowsShot += 1;
                this.chargeTime = 0;
                this.chargeDisplay.setText("Charge: " + this.chargeTime);
            }
            if (this.chargeTime < 100) {
                this.chargeTime = this.chargeTime == 0 ? 1 : this.chargeTime * 1.1;
                if (this.chargeTime > 100) {
                    this.chargeTime = 100;
                }
                this.chargeDisplay.setText("Charge: " + this.chargeTime);
            }            
        }
        else if (this.chargeTime > 0) {
            this.shootArrow(this.chargeTime+10/this.scale, this.scale, this.bow, this.mousex, this.mousey, this.spawnedArrows);
            this.arrowsShot += 1;
            this.chargeTime = 0;
            this.chargeDisplay.setText("Charge: " + this.chargeTime);
        }

        const angle = Phaser.Math.Angle.Between(this.bow.x, this.bow.y, this.mousex, this.mousey);
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
            let delta = 0;
            this.tweens.addCounter({
                from: 0,
                to: 1000,
                onUpdate: (tween) => {
                    if (delta == 0) {
                        delta = tween.getValue();
                    }
                    else {
                        // delta = tween.getValue() - delta;
                        delta = Math.abs(delta-tween.getValue());
                    }
                    for (let iterations = 0; iterations < delta/(200/this.scale+0.2); iterations++) {
                        this.matter.world.engine.timing.timeScale = this.matter.world.engine.timing.timeScale > 0.001 ? this.matter.world.engine.timing.timeScale * 0.975 : 0.001;
                    }
                }
            });
            this.time.delayedCall(5000, ()=>{
                var pipelineInstance = this.plugins.get('rexkawaseblurpipelineplugin').add(this.cameras.main, {
                    blur: 5,
                    quality: 3
                });
                this.scene.launch('SummaryScene', {
                    arrowsHit: this.arrowsHit, 
                    arrowsShot: this.arrowsShot, 
                    health: this.player.health, 
                    maxHealth: 3, 
                    duration: this.sceneDuration,
                    currentLevel: this.currentLevel,
                    nextLevel: this.nextLevel
                });
                this.scene.pause();
            });
        }
    }

    constructHumanoid(x, y, scale, staticBody, health) {
        let flip = scale < 0 ? true : false;
        scale = Math.abs(scale);

        let head = this.matter.add.rectangle(x, y - 60 * scale, 34 * scale, 40 * scale, {
            isStatic: staticBody,
            label: 'head',
            collisionFilter: {
                group: this.matter.body.nextGroup(true)
            },
            chamfer: {
                radius: [15 * scale, 15 * scale, 15 * scale, 15 * scale]
            },
            render: {
                fillStyle: '#FFBC42'
            }});
        // console.log(head);

        let chest = this.matter.add.rectangle(x, y, 55 * scale, 80 * scale, {
            isStatic: staticBody,
            label: 'chest',
            collisionFilter: {
                group: this.matter.body.nextGroup(true)
            },
            chamfer: {
                radius: [20 * scale, 20 * scale, 26 * scale, 26 * scale]
            },
            render: {
                fillStyle: '#E0A423'
            }
        });
        
        let leftUpperArm = this.matter.add.rectangle(x - 39 * scale, y - 15 * scale, 20 * scale, 40 * scale, {
            isStatic: staticBody,
            label: 'left-arm',
            collisionFilter: {
                group: this.matter.body.nextGroup(true)
            },
            chamfer: {
                radius: 10 * scale
            },
            render: {
                fillStyle: '#FFBC42'
            }
        });
        
        let leftLowerArm = this.matter.add.rectangle(x - 39 * scale, y + 25 * scale, 20 * scale, 60 * scale, {
            isStatic: staticBody,
            label: 'left-lower-arm',
            collisionFilter: {
                group: this.matter.body.nextGroup(true)
            },
            chamfer: {
                radius: 10 * scale
            },
            render: {
                fillStyle: '#E59B12'
            }
        });
        
        let rightUpperArm = this.matter.add.rectangle(x + 39 * scale, y - 15 * scale, 20 * scale, 40 * scale, {
            isStatic: staticBody,
            label: 'right-arm',
            collisionFilter: {
                group: this.matter.body.nextGroup(true)
            },
            chamfer: {
                radius: 10 * scale
            },
            render: {
                fillStyle: '#FFBC42'
            }
        });
        
        let rightLowerArm = this.matter.add.rectangle(x + 39 * scale, y + 25 * scale, 20 * scale, 60 * scale, {
            isStatic: staticBody,
            label: 'right-lower-arm',
            collisionFilter: {
                group: this.matter.body.nextGroup(true)
            },
            chamfer: {
                radius: 10 * scale
            },
            render: {
                fillStyle: '#E59B12'
            }
        });
        
        let leftUpperLeg = this.matter.add.rectangle(x - 20 * scale, y + 57 * scale, 20 * scale, 40 * scale, {
            isStatic: staticBody,
            label: 'left-leg',
            collisionFilter: {
                group: this.matter.body.nextGroup(true)
            },
            chamfer: {
                radius: 10 * scale
            },
            render: {
                fillStyle: '#FFBC42'
            }
        });
        
        let leftLowerLeg = this.matter.add.rectangle(x - 20 * scale, y + 97 * scale, 20 * scale, 60 * scale, {
            isStatic: staticBody,
            label: 'left-lower-leg',
            collisionFilter: {
                group: this.matter.body.nextGroup(true)
            },
            chamfer: {
                radius: 10 * scale
            },
            render: {
                fillStyle: '#E59B12'
            }
        });
        
        let rightUpperLeg = this.matter.add.rectangle(x + 20 * scale, y + 57 * scale, 20 * scale, 40 * scale, {
            isStatic: staticBody,
            label: 'right-leg',
            collisionFilter: {
                group: this.matter.body.nextGroup(true)
            },
            chamfer: {
                radius: 10 * scale
            },
            render: {
                fillStyle: '#FFBC42'
            }
        });
        
        let rightLowerLeg = this.matter.add.rectangle(x + 20 * scale, y + 97 * scale, 20 * scale, 60 * scale, {
            isStatic: staticBody,
            label: 'right-lower-leg',
            collisionFilter: {
                group: this.matter.body.nextGroup(true)
            },
            chamfer: {
                radius: 10 * scale
            },
            render: {
                fillStyle: '#FFBC42'
            }
        });

        // scale = 1.2;

        let chestToRightUpperArm = this.matter.add.constraint(chest, rightUpperArm, 25*(scale*0.6), 0.6, {
            pointA: {
                x: 24 * scale,
                y: -23 * scale
            },
            pointB: {
                x: 0,
                y: -8 * scale
            },
            render: {
                visible: false
            }
        });
        
        let chestToLeftUpperArm = this.matter.add.constraint(chest, leftUpperArm, 25*(scale*0.6), 0.6, {
            pointA: {
                x: -24 * scale,
                y: -23 * scale
            },
            pointB: {
                x: 0,
                y: -8 * scale
            },
            render: {
                visible: false
            }
        });
        
        let chestToLeftUpperLeg = this.matter.add.constraint(chest, leftUpperLeg, 25*(scale*0.8), 0.6, {
            pointA: {
                x: -10 * scale,
                y: 30 * scale
            },
            pointB: {
                x: 0,
                y: -10 * scale
            },
            render: {
                visible: false
            }
        });
        
        let chestToRightUpperLeg =this.matter.add.constraint(chest, rightUpperLeg, 25*(scale*0.8), 0.6, {
            pointA: {
                x: 10 * scale,
                y: 30 * scale
            },
            pointB: {
                x: 0,
                y: -10 * scale
            },
            render: {
                visible: false
            }
        });
        
        let upperToLowerRightArm = this.matter.add.constraint(rightUpperArm, rightLowerArm, 15*(scale*0.6), 0.6, {
            pointA: {
                x: 0,
                y: 15 * scale
            },
            pointB: {
                x: 0,
                y: -25 * scale
            },
            render: {
                visible: false
            }
        });
        
        let upperToLowerLeftArm =this.matter.add.constraint(leftUpperArm, leftLowerArm, 15*(scale*0.6), 0.6, {
            pointA: {
                x: 0,
                y: 15 * scale
            },
            pointB: {
                x: 0,
                y: -25 * scale
            },
            render: {
                visible: false
            }
        });
        
        let upperToLowerLeftLeg = this.matter.add.constraint(leftUpperLeg, leftLowerLeg, 15*(scale*0.6), 0.6, {
            pointA: {
                x: 0,
                y: 20 * scale
            },
            pointB: {
                x: 0,
                y: -20 * scale
            },
            render: {
                visible: false
            }
        });
        
        let upperToLowerRightLeg = this.matter.add.constraint(rightUpperLeg, rightLowerLeg, 15*(scale*0.6), 0.6, {
            pointA: {
                x: 0,
                y: 20 * scale
            },
            pointB: {
                x: 0,
                y: -20 * scale
            },
            render: {
                visible: false
            }
        });
        
        let headConstraint = this.matter.add.constraint(head, chest, 0, 0.6, {
            pointA: {
                x: 0,
                y: 25 * scale
            },
            pointB: {
                x: 0,
                y: -35 * scale
            },
            render: {
                visible: false
            }
        });
        
        let legToLeg = this.matter.add.constraint(leftLowerLeg, rightLowerLeg, 50*(scale*0.4), 0.01, {
            render: {
                visible: false
            }
        });
            
        let person = this.matter.composite.create({
            bodies: [
                chest, head, leftLowerArm, leftUpperArm, 
                rightLowerArm, rightUpperArm, leftLowerLeg, 
                rightLowerLeg, leftUpperLeg, rightUpperLeg
            ],
            constraints: [
                upperToLowerLeftArm, upperToLowerRightArm, chestToLeftUpperArm, 
                chestToRightUpperArm, headConstraint, upperToLowerLeftLeg, 
                upperToLowerRightLeg, chestToLeftUpperLeg, chestToRightUpperLeg,
                legToLeg
            ]
        });

        this.matter.body.setStatic(chest, !staticBody);
        person.health = health;
        person.dead = false;

        let linkedSprites = [];

        // scale = flip ? -1*scale : scale;

        let oppHead = this.add.sprite(0, 0, 'aOpponentHead').setScale(scale*0.22);
        oppHead.linkedBody = head;
        linkedSprites.push(oppHead);

        let oppBody = this.add.sprite(0, 0, 'aOpponentBody').setScale(scale*0.24);
        oppBody.linkedBody = chest;
        linkedSprites.push(oppBody);

        let oppUpperRightArm = this.add.sprite(0, 0, 'aOpponentShortLimb').setScale(scale*0.24);
        oppUpperRightArm.linkedBody = rightUpperArm;
        linkedSprites.push(oppUpperRightArm);

        let oppLowerRightArm = this.add.sprite(0, 0, 'aOpponentArm').setScale(scale*0.24);
        oppLowerRightArm.linkedBody = rightLowerArm;
        linkedSprites.push(oppLowerRightArm);

        let oppUpperLeftArm = this.add.sprite(0, 0, 'aOpponentShortLimb').setScale(scale*0.24);
        oppUpperLeftArm.linkedBody = leftUpperArm;
        linkedSprites.push(oppUpperLeftArm);

        let oppLowerLeftArm = this.add.sprite(0, 0, 'aOpponentArm').setScale(scale*0.24);
        oppLowerLeftArm.linkedBody = leftLowerArm;
        linkedSprites.push(oppLowerLeftArm);

        let oppUpperRightLeg = this.add.sprite(0, 0, 'aOpponentShortLimb').setScale(scale*0.24);
        oppUpperRightLeg.linkedBody = rightUpperLeg;
        linkedSprites.push(oppUpperRightLeg);

        let oppLowerRightLeg = this.add.sprite(0, 0, 'aOpponentLeg').setScale(scale*0.24);
        oppLowerRightLeg.linkedBody = rightLowerLeg;
        linkedSprites.push(oppLowerRightLeg);

        let oppUpperLeftLeg = this.add.sprite(0, 0, 'aOpponentShortLimb').setScale(scale*0.24);
        oppUpperLeftLeg.linkedBody = leftUpperLeg;
        linkedSprites.push(oppUpperLeftLeg);

        let oppLowerLeftLeg = this.add.sprite(0, 0, 'aOpponentLeg').setScale(scale*0.24);
        oppLowerLeftLeg.linkedBody = leftLowerLeg;
        linkedSprites.push(oppLowerLeftLeg);

        linkedSprites.forEach(element => {
            element.setFlipX(flip);
        });

        person.linkedSprites = linkedSprites;
        person.linkedArrows = [];

        this.matter.world.on('beforeupdate', () => {
            linkedSprites.forEach(element => {
                element.setPosition(element.linkedBody.position.x, element.linkedBody.position.y);
                element.setRotation(element.linkedBody.angle);
            });
        });

        return person;
    }

    spawnArrow(x, y, angle, velocityX, velocityY, scale) {
        let arrow = this.matter.add.image(x, y, 'arrow', null);
        arrow.setScale(0.2 * scale);
        arrow.setAngle(angle);
        arrow.setVelocity(velocityX, velocityY);
        arrow.rotation = angle;
        arrow.alreadyHit = false;
        arrow.body.collisionFilter.group = -15;
        // console.log(arrow);
        return arrow;
    }

    shootArrow(power, scale, bow, mousex, mousey, arrowList) {
        scale = Math.abs(scale);
        const angle = Phaser.Math.Angle.Between(bow.x, bow.y, mousex, mousey);
        const speed = power * scale;
        const velocityX = Math.cos(angle) * speed;
        const velocityY = Math.sin(angle) * speed;
        
        let newArrow = this.spawnArrow(bow.x, bow.y, angle, velocityX, velocityY-0.09, scale);

        arrowList.push(newArrow);
        this.time.delayedCall(7500, ()=>{
            if (newArrow) {
                this.destroyArrow(newArrow, arrowList);
            }
        });
        while (arrowList.length > 25) {
            this.destroyArrow(arrowList[0], arrowList);
        }
    }

    destroyArrow(arrow, arrowList) {
        arrowList.splice(arrowList.indexOf(arrow),1);
        this.tweens.add({
            targets: [arrow],
            alpha: '0',
            duration:1000,
            ease:"Cubic.easeOut",
            repeat:0,
            onComplete: () => { 
                if (arrow.bodyConstraint) {
                    this.matter.world.removeConstraint(arrow.bodyConstraint);
                }
                arrow.active = false;
                arrow.destroy();
            }
        });
    }

    createPlayer(x, y, scale) {

        let aimArrow = this.matter.add.image(100, 0, 'arrow', null);
        // aimArrow.scale = 0.2 * scale;
        aimArrow.setStatic(true);
        aimArrow.setScale(0.2 * scale);
        // aimArrow.setOrigin(-2,-2);
        // console.log(aimArrow);
        // console.log(this);
        let bow = this.matter.add.image(100, 0, 'bow', null);
        // bow.scale = 0.2 * scale;
        bow.setStatic(true);
        bow.setScale(0.2 * scale);
        // bow.setOrigin(-2,-2);
        let player = this.constructHumanoid(x, y, scale, false, 3);
        let playerContainer = this.add.container(x, y);
        // console.log(playerContainer);
        playerContainer.add([bow, aimArrow]);
        return {player, playerContainer};
    }

    checkArrowCollisions(arrowList, person) {
        arrowList.forEach(arrow => {
            person.bodies.forEach(part => {
                let col = this.matter.collision.collides(arrow.body, part);
                if (col) {
                    if (person.health <= 0 && !person.dead) {
                        person.dead = true;
                        person.bodies.forEach(element => {
                            if (element.label == 'chest')
                                this.matter.body.setStatic(element, false);
                            });
                        this.time.delayedCall(2500, ()=>{
                            person.constraints.forEach(element => {
                                this.matter.world.removeConstraint(element);
                            });
                            // console.log(person);
                            person.bodies.forEach(element => {
                                element.collisionFilter.group = -1;    
                            });
                            if (person.linkedArrows.length > 0) {
                                // console.log(person.linkedArrows);
                                person.linkedArrows.forEach(arrow => {
                                    if (arrow.body) {
                                        arrow.body.collisionFilter.group = -1;
                                    }
                                });
                            }
                            this.tweens.add({
                                delay: 1000,
                                targets: person.linkedSprites,
                                alpha: {from: 1, to: 0.25},
                                duration:2000,
                                ease:"Cubic.easeOut",
                                repeat:0,
                            });
                            // person.linkedSprites.forEach(sprite => {
                            //     sprite.setAlpha(0.5);
                            // });
                        });
                    }
                    if (!arrow.alreadyHit) {
                        arrow.bodyConstraint = this.matter.add.constraint(arrow, part, 0, 0, {
                            pointA: {
                                x: (0.5-Math.random()) * 75,
                                y: (0.5-Math.random()) * 30                               
                            },
                            pointB: {
                                x: 0,
                                y: 0
                            },
                            render: {
                                visible: true
                            }
                        });
                        person.linkedArrows.push(arrow);
                        // arrow.body.slop = 0.5;
                        arrow.body.collisionFilter.group = part.collisionFilter.group;
                        arrow.alreadyHit = true;
                        // console.log(arrow);
                        if (person.health > 0) {
                            person.linkedSprites.forEach(sprite => {
                                sprite.setTint(0xff0000);
                            });
                            if (part.label == "head") {
                                person.health -= 3;
                            }
                            else {
                                person.health -= 1;
                            }
                            this.events.emit("arrowHit", 1);
                            this.time.delayedCall(250, ()=>{
                                person.linkedSprites.forEach(sprite => {
                                    sprite.clearTint();
                                });
                            });
                        }
                        // return 1;
                    }

                }
            });
        });
        // return 0;
    }
}