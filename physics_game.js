class Example extends Phaser.Scene
{
    preload ()
    {
    }

    create ()
    {   
        // https://labs.phaser.io/edit.html?src=src/physics/matterjs/basic%20constraint.js
        // const text = this.add.text(100, 0, 'Phaser 3', { font: '32px Arial', fill: '#00ff00' });
        // const text2 = this.add.text(100, -100, 'Phaser 3', { font: '32px Arial', fill: '#ffff00' });

        // const matterText = this.matter.add.gameObject(text, { shape: { type: 'polygon', sides: 8, radius: 64 } }).setFrictionAir(0.001).setBounce(0.9);
        // const matterText2 = this.matter.add.gameObject(text2).setFrictionAir(0.001).setBounce(0.9);

        // matterText2.setVelocity(5, 10);

        let ground = this.matter.add.rectangle(400, 650, 800, 100, { isStatic: true });

        console.log(this);

        this.matter.add.mouseSpring();

        let scale = 1.5;
        let x = 400, y = 400;
        let staticBody = false;
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
        console.log(head);

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

        this.matter.add.constraint(chest, rightUpperArm, 25, 0.6, {
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
        
        this.matter.add.constraint(chest, leftUpperArm, 25, 0.6, {
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
        
        this.matter.add.constraint(chest, leftUpperLeg, 25, 0.6, {
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
        
        this.matter.add.constraint(chest, rightUpperLeg, 25, 0.6, {
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
        
        this.matter.add.constraint(rightUpperArm, rightLowerArm, 15, 0.6, {
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
        
        this.matter.add.constraint(leftUpperArm, leftLowerArm, 15, 0.6, {
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
        
        this.matter.add.constraint(leftUpperLeg, leftLowerLeg, 15, 0.6, {
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
        
        this.matter.add.constraint(rightUpperLeg, rightLowerLeg, 15, 0.6, {
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
        
        this.matter.add.constraint(head, chest, 0, 0.6, {
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
        
        this.matter.add.constraint(leftLowerLeg, rightLowerLeg, 50, 0.01, {
            render: {
                visible: true
            }
        });
            
        var person = this.matter.composite.create({
            bodies: [
                chest, head, leftLowerArm, leftUpperArm, 
                rightLowerArm, rightUpperArm, leftLowerLeg, 
                rightLowerLeg, leftUpperLeg, rightUpperLeg
            ],
            // constraints: [
            //     upperToLowerLeftArm, upperToLowerRightArm, chestToLeftUpperArm, 
            //     chestToRightUpperArm, headContraint, upperToLowerLeftLeg, 
            //     upperToLowerRightLeg, chestToLeftUpperLeg, chestToRightUpperLeg,
            //     legToLeg
            // ]
        });

        // let b = [
        //     chest, head, leftLowerArm, leftUpperArm, 
        //     rightLowerArm, rightUpperArm, leftLowerLeg, 
        //     rightLowerLeg, leftUpperLeg, rightUpperLeg
        // ];
        // this.matter.composite.add(person);
        // console.log(person);
        this.input.on('pointerdown', (event) => {
            staticBody = !staticBody;
            person.bodies.forEach(element => {
                    this.matter.body.setStatic(element, staticBody); // = staticBody;
                });
        });
        
        // this.matter.body.setStatic(chest, true);
        // chest.x = 0;
        // this.matter.body.setPosition(chest, { x: 400, y: 400 });
        console.log(chest);
        // console.log(staticBody);
        // b.
        // });
    }
}

const game = new Phaser.Game({
    type: Phaser.AUTO,
    backgroundColor: '#1b1464',
    physics: {
        default: 'matter',
        matter: {
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
