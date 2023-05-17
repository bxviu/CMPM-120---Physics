class LevelScene extends Phaser.Scene {
    
    init(data) {
        // console.log(data);
        this.data = data;
    }

    preload() {
        this.load.path = './assets/';
        this.load.image("aOpponentHead", "armoredOpponent-head.png");
        this.load.image("aOpponentBody", "armoredOpponent-body.png");
        this.load.image("aOpponentShortLimb", "armoredOpponent-shortLimb.png");
        this.load.image("aOpponentLeg", "armoredOpponent-leg.png");
        this.load.image("aOpponentArm", "armoredOpponent-arm.png");
        // this.load.image("aOpponentLongLimb", "armoredOpponent-longLimb.png");
    }

    constructHumanoid(x, y, scale, staticBody, health) {
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
        
        // let legToLeg = this.matter.add.constraint(leftLowerLeg, rightLowerLeg, 50*(scale*0.6), 0.01, {
        //     render: {
        //         visible: false
        //     }
        // });
            
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
                //legToLeg
            ]
        });

        this.matter.body.setStatic(chest, !staticBody);
        person.health = health;

        let linkedSprites = [];

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
        // this.matter.body.setCentre(arrow.body,{x:1, y:1}, true);
        // arrow.body.centerOfMass = {x:10, y:0.5};
        // console.log(arrow.centerOfMass);
        console.log(arrow);
        return arrow;
    }

    shootArrow(power, scale, aimArrow, mousex, mousey, arrowList) {
        const angle = Phaser.Math.Angle.Between(aimArrow.x, aimArrow.y, mousex, mousey);
        const speed = power * scale;
        const velocityX = Math.cos(angle) * speed;
        const velocityY = Math.sin(angle) * speed;
        
        let newArrow = this.spawnArrow(aimArrow.x, aimArrow.y, angle, velocityX, velocityY-0.09, scale);

        arrowList.push(newArrow);
        this.time.delayedCall(5000, ()=>{
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

    checkArrowCollisions(arrowList, person) {
        arrowList.forEach(arrow => {
            person.bodies.forEach(part => {
                let col = this.matter.collision.collides(arrow.body, part);
                if (col) {
                    if (person.health <= 0) {
                        person.bodies.forEach(element => {
                            if (element.label == 'chest')
                                this.matter.body.setStatic(element, false);
                            });
                        this.time.delayedCall(500, ()=>{
                            person.constraints.forEach(element => {
                                this.matter.world.removeConstraint(element);
                            });
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
                        // arrow.body.slop = 0.5;
                        arrow.body.collisionFilter.group = part.collisionFilter.group;
                        arrow.alreadyHit = true;
                        // console.log(arrow);
                        if (part.label == "head") {
                            person.health -= 3;
                        }
                        else {
                            person.health -= 1;
                        }
                        // arrow.active = false;
                    }

                }
            });
        });
    }

}