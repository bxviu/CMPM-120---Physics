class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.path = './assets/';
        this.load.image("arrow", "arrow.png");
        this.load.image("bow", "bow.png");
    }

    init(data) {
        // console.log(data);
        this.data = data;
    }

    constructHumanoid(x, y, scale, staticBody) {
        var head = this.matter.add.rectangle(x, y - 60 * scale, 34 * scale, 40 * scale, {isStatic: staticBody,
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

        var chest = this.matter.add.rectangle(x, y, 55 * scale, 80 * scale, {
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
        
        var leftUpperArm = this.matter.add.rectangle(x - 39 * scale, y - 15 * scale, 20 * scale, 40 * scale, {
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
        
        var leftLowerArm = this.matter.add.rectangle(x - 39 * scale, y + 25 * scale, 20 * scale, 60 * scale, {
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
        
        var rightUpperArm = this.matter.add.rectangle(x + 39 * scale, y - 15 * scale, 20 * scale, 40 * scale, {
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
        
        var rightLowerArm = this.matter.add.rectangle(x + 39 * scale, y + 25 * scale, 20 * scale, 60 * scale, {
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
        
        var leftUpperLeg = this.matter.add.rectangle(x - 20 * scale, y + 57 * scale, 20 * scale, 40 * scale, {
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
        
        var leftLowerLeg = this.matter.add.rectangle(x - 20 * scale, y + 97 * scale, 20 * scale, 60 * scale, {
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
        
        var rightUpperLeg = this.matter.add.rectangle(x + 20 * scale, y + 57 * scale, 20 * scale, 40 * scale, {
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
        
        var rightLowerLeg = this.matter.add.rectangle(x + 20 * scale, y + 97 * scale, 20 * scale, 60 * scale, {
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

        let chestToRightUpperArm = this.matter.add.constraint(chest, rightUpperArm, 25, 0.6, {
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
        
        let chestToLeftUpperArm = this.matter.add.constraint(chest, leftUpperArm, 25, 0.6, {
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
        
        let chestToLeftUpperLeg = this.matter.add.constraint(chest, leftUpperLeg, 25, 0.6, {
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
        
        let chestToRightUpperLeg =this.matter.add.constraint(chest, rightUpperLeg, 25, 0.6, {
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
        
        let upperToLowerRightArm = this.matter.add.constraint(rightUpperArm, rightLowerArm, 15, 0.6, {
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
        
        let upperToLowerLeftArm =this.matter.add.constraint(leftUpperArm, leftLowerArm, 15, 0.6, {
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
        
        let upperToLowerLeftLeg = this.matter.add.constraint(leftUpperLeg, leftLowerLeg, 15, 0.6, {
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
        
        let upperToLowerRightLeg = this.matter.add.constraint(rightUpperLeg, rightLowerLeg, 15, 0.6, {
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
        
        let legToLeg = this.matter.add.constraint(leftLowerLeg, rightLowerLeg, 50, 0.01, {
            render: {
                visible: false
            }
        });
            
        var person = this.matter.composite.create({
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

        return person;
    }

    spawnArrow(x, y, angle, velocityX, velocityY, scale) {
        let arrow = this.matter.add.image(x, y, 'arrow', null);
        arrow.setScale(0.2 * scale);
        arrow.setAngle(angle);
        arrow.setVelocity(velocityX, velocityY);
        arrow.rotation = angle;
        // console.log(this.person);
        // arrow.setOnCollideWith(this.person, pair => {
        //     arrow.destroy();
            
        //     this.person.bodies.forEach(element => {
        //         if (element.label == 'chest')
        //             this.matter.body.setStatic(element, staticBody);
        //         });
        //   });
        return arrow;
    }

    create ()
    {   
        // https://labs.phaser.io/edit.html?src=src/physics/matterjs/basic%20constraint.js
        // const text = this.add.text(100, 0, 'Phaser 3', { font: '32px Arial', fill: '#00ff00' });
        // const text2 = this.add.text(100, -100, 'Phaser 3', { font: '32px Arial', fill: '#ffff00' });

        // const matterText = this.matter.add.gameObject(text, { shape: { type: 'polygon', sides: 8, radius: 64 } }).setFrictionAir(0.001).setBounce(0.9);
        // const matterText2 = this.matter.add.gameObject(text2).setFrictionAir(0.001).setBounce(0.9);



        this.aimArrow = this.matter.add.image(1500, 400, 'arrow', null);
        this.spawnedArrows = [];
        // this.matter.body.setStatic(arrow, true);
        // arrow.setVelocity(0, 10);

        this.aimArrow.setStatic(true);
        // let bow = this.matter.add.image(400, 300, 'bow');

        let ground = this.matter.add.rectangle(400, 650, 800, 100, { isStatic: true });
        let wall = this.matter.add.rectangle(0, 200, 100, 800, { isStatic: true });

        let staticBody = false;
        let scale = this.data.scale != null ? this.data.scale : 2;

        this.aimArrow.setScale(0.2 * scale);
        // arrow.setAngle(180);
        // arrow.setVelocity(0, 0);
        console.log(this);

        // this.matter.add.mouseSpring();
        let {mousex,mousey,isDown} = this.input.activePointer;
        this.mousex = mousex;
        this.mousey = mousey;
        this.input.on('pointerdown', (event) => {
            // arrow.setStatic(false);
            // console.log(this.mousex,this.mousey);
            // console.log(arrow.isStatic());
            // console.log(arrow);
            const angle = Phaser.Math.Angle.Between(this.aimArrow.x, this.aimArrow.y, this.mousex, this.mousey);
            const speed = 35 * scale;
            const velocityX = Math.cos(angle) * speed;
            const velocityY = Math.sin(angle) * speed;
            // this.matter.body.rotate(arrow, angle, [this.mousex, this.mousey], false);
            
            // arrow.rotation = angle;
            // arrow.setAngularVelocity(0);
            // arrow.setAngularSpeed(0);
            // this.matter.body.setAngularVelocity(arrow, 0);
            // this.matter.body.setAngularSpeed(arrow, 0);
            // arrow.setVelocity(velocityX, velocityY);
            let newArrow = this.spawnArrow(this.aimArrow.x, this.aimArrow.y, angle, velocityX, velocityY-0.09, scale);
            this.spawnedArrows.push(newArrow);
        });


        let person = this.constructHumanoid(400,400,scale,false);

        this.person = person;
        // console.log(person);
        
        
        let down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        let up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        // down.on('down', () => {
            staticBody = !staticBody;
            person.bodies.forEach(element => {
                if (element.label == 'chest')
                    this.matter.body.setStatic(element, staticBody);
                });
                //     this.matter.body.setStatic(element, staticBody); // = staticBody;
                // });
        // });
        up.on('up', () => {
                // arrow.setPosition(1500,400);
                // arrow.setVelocity(-50,0);
                // arrow.setAngle(180);
                this.scene.restart({"scale":1.5});
            });
            
    }

    update() {
        let {x,y,isDown} = this.input.activePointer;
        this.mousex = x;
        this.mousey = y;
        const angle = Phaser.Math.Angle.Between(this.aimArrow.x, this.aimArrow.y, this.mousex, this.mousey);
        this.aimArrow.setAngle(angle);
        this.aimArrow.rotation = angle;

        this.spawnedArrows.forEach(arrow =>  {
            this.person.bodies.forEach(part => {
                // console.log(arrow.body);
                // console.log(part);
                let col = this.matter.collision.collides(arrow.body, part);
                // console.log(col);
                if (col) {
                    console.log(col);
                    this.person.bodies.forEach(element => {
                        if (element.label == 'chest')
                            this.matter.body.setStatic(element, false);
                        });
                }
            });
        });
       
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
    scene: Example,
    title: "Physics Game",
});
