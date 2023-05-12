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
//         let leftarm = this.matter.add.rectangle(350, 400, 25, 75, );
// //https://labs.phaser.io/edit.html?src=src/physics/matterjs/snake.js
//         let upperbody = this.matter.add.rectangle(400, 400, 50, 75,);

//         // this.matter.body.setCentre(upperbody, {x:400,y:370}, false);

//         let lowerbody = this.matter.add.rectangle(400, 480, 50, 75, );
//         // let leftarm = this.add.rectangle(350, 400, 25, 75, { fillStyle: '#ffff00' });
//         // let bruh = this.matter.add.gameObject(leftarm); //.setOrigin(0.5, 0);
//         this.matter.body.setCentre(leftarm, {x:350,y:370}, false);
//         let rightarm = this.matter.add.rectangle(450, 400, 25, 75, { isStatic: true });
//         // this.matter.add.constraint(upperbody, leftarm, 40, 0.2);
//         console.log(this.matter.constraint.create({
//             bodyA: upperbody,
//             pointA: {
//                 x: 400,
//                 y: 370
//             },
//             pointB: {
//                 x: 350,
//                 y: 400
//             },
//             bodyB: leftarm,
//             stiffness: 0.6,
//             render: {
//                 visible: true
//             }
//         }));
//         this.matter.add.constraint(upperbody, lowerbody, 75, 1);
//         // this.matter.add(leftarm);
//         this.matter.add.constraint(leftarm, upperbody, 40);
//         let leftleg  = this.matter.add.rectangle(375, 550, 25, 75, { isStatic: true });
//         let rightleg = this.matter.add.rectangle(425, 550, 25, 75, { isStatic: true });
//         let head = this.matter.add.circle(400, 330, 30,);

//         let headtobod = this.matter.constraint.create({ 
//             bodyA: upperbody,
//             // pointA: {x: 400, y: 370},
//             // pointB: {x: 0, y: 0},
//             bodyB: head,
//             stiffness: 0.01,
//         });
        
//         this.matter.add.constraint(upperbody, head, 70, 1);
//         console.log(this.matter.constraint.currentLength(headtobod));
//         // this.matter.add.constraint(headtobod);
//         console.log(headtobod);


        let ground = this.matter.add.rectangle(400, 650, 800, 100, { isStatic: true });

//         // const ballA = this.matter.add.circle(420, 100, 10);
//         // const ballB = this.matter.add.circle(400, 200, 10);
//         // this.matter.add.constraint(ballA, ballB, 100, 0.2);

        console.log(this);

        this.matter.add.mouseSpring();

        let scale = 1.5;
        let x = 400, y = 400;
        let staticBody = false;
        var head = this.matter.add.rectangle(x, y - 60 * scale, 34 * scale, 40 * scale, {isStatic: staticBody});
        var chest = this.matter.add.rectangle(x, y, 55 * scale, 80 * scale, {isStatic: staticBody});
        var rightUpperArm = this.matter.add.rectangle(x + 39 * scale, y - 15 * scale, 20 * scale, 40 * scale, {isStatic: staticBody});
        var rightLowerArm = this.matter.add.rectangle(x + 39 * scale, y + 25 * scale, 20 * scale, 60 * scale, {isStatic: staticBody});
        var leftUpperArm = this.matter.add.rectangle(x - 39 * scale, y - 15 * scale, 20 * scale, 40 * scale, {isStatic: staticBody});
        var leftLowerArm = this.matter.add.rectangle(x - 39 * scale, y + 25 * scale, 20 * scale, 60 * scale, {isStatic: staticBody});
        var leftUpperLeg = this.matter.add.rectangle(x - 20 * scale, y + 57 * scale, 20 * scale, 40 * scale, {isStatic: staticBody});
        var leftLowerLeg = this.matter.add.rectangle(x - 20 * scale, y + 97 * scale, 20 * scale, 60 * scale, {isStatic: staticBody});
        var rightUpperLeg = this.matter.add.rectangle(x + 20 * scale, y + 57 * scale, 20 * scale, 40 * scale, {isStatic: staticBody});
        var rightLowerLeg = this.matter.add.rectangle(x + 20 * scale, y + 97 * scale, 20 * scale, 60 * scale, {isStatic: staticBody});
    
        this.matter.add.constraint(rightUpperArm, rightLowerArm, 25, 0.6, {
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
            }});

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
        
        this.matter.add.constraint(rightUpperArm, rightLowerArm, 25, 0.6, {
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
        
        this.matter.add.constraint(leftUpperArm, leftLowerArm, 25, 0.6, {
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
        
        this.matter.add.constraint(leftUpperLeg, leftLowerLeg, 25, 0.6, {
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
        
        this.matter.add.constraint(rightUpperLeg, rightLowerLeg, 25, 0.6, {
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
        
        this.matter.add.constraint(head, chest, 15, 0.6, {
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
        
        this.matter.add.constraint(leftLowerLeg, rightLowerLeg, 25, 0.01, {
            render: {
                visible: false
            }
        });
            

        // var chestToRightUpperArm = this.matter.constraint.create({
        //     bodyA: chest,
        //     pointA: {
        //         x: 24 * scale,
        //         y: -23 * scale
        //     },
        //     pointB: {
        //         x: 0,
        //         y: -8 * scale
        //     },
        //     bodyB: rightUpperArm,
        //     stiffness: 0.6,
        //     render: {
        //         visible: false
        //     }
        // });
    
        // var chestToLeftUpperArm = this.matter.constraint.create({
        //     bodyA: chest,
        //     pointA: {
        //         x: -24 * scale,
        //         y: -23 * scale
        //     },
        //     pointB: {
        //         x: 0,
        //         y: -8 * scale
        //     },
        //     bodyB: leftUpperArm,
        //     stiffness: 0.6,
        //     render: {
        //         visible: false
        //     }
        // });
    
        // var chestToLeftUpperLeg = this.matter.constraint.create({
        //     bodyA: chest,
        //     pointA: {
        //         x: -10 * scale,
        //         y: 30 * scale
        //     },
        //     pointB: {
        //         x: 0,
        //         y: -10 * scale
        //     },
        //     bodyB: leftUpperLeg,
        //     stiffness: 0.6,
        //     render: {
        //         visible: false
        //     }
        // });
    
        // var chestToRightUpperLeg = this.matter.constraint.create({
        //     bodyA: chest,
        //     pointA: {
        //         x: 10 * scale,
        //         y: 30 * scale
        //     },
        //     pointB: {
        //         x: 0,
        //         y: -10 * scale
        //     },
        //     bodyB: rightUpperLeg,
        //     stiffness: 0.6,
        //     render: {
        //         visible: false
        //     }
        // });
    
        // var upperToLowerRightArm = this.matter.constraint.create({
        //     bodyA: rightUpperArm,
        //     bodyB: rightLowerArm,
        //     pointA: {
        //         x: 0,
        //         y: 15 * scale
        //     },
        //     pointB: {
        //         x: 0,
        //         y: -25 * scale
        //     },
        //     stiffness: 0.6,
        //     render: {
        //         visible: true
        //     }
        // });

        // var upperToLowerLeftArm = this.matter.constraint.create({
        //     bodyA: leftUpperArm,
        //     bodyB: leftLowerArm,
        //     pointA: {
        //         x: 0,
        //         y: 15 * scale
        //     },
        //     pointB: {
        //         x: 0,
        //         y: -25 * scale
        //     },
        //     stiffness: 0.6,
        //     render: {
        //         visible: false
        //     }
        // });
    
        // var upperToLowerLeftLeg = this.matter.constraint.create({
        //     bodyA: leftUpperLeg,
        //     bodyB: leftLowerLeg,
        //     pointA: {
        //         x: 0,
        //         y: 20 * scale
        //     },
        //     pointB: {
        //         x: 0,
        //         y: -20 * scale
        //     },
        //     stiffness: 0.6,
        //     render: {
        //         visible: false
        //     }
        // });
    
        // var upperToLowerRightLeg = this.matter.constraint.create({
        //     bodyA: rightUpperLeg,
        //     bodyB: rightLowerLeg,
        //     pointA: {
        //         x: 0,
        //         y: 20 * scale
        //     },
        //     pointB: {
        //         x: 0,
        //         y: -20 * scale
        //     },
        //     stiffness: 0.6,
        //     render: {
        //         visible: false
        //     }
        // });
    
        // var headContraint = this.matter.constraint.create({
        //     bodyA: head,
        //     pointA: {
        //         x: 0,
        //         y: 25 * scale
        //     },
        //     pointB: {
        //         x: 0,
        //         y: -35 * scale
        //     },
        //     bodyB: chest,
        //     stiffness: 0.6,
        //     render: {
        //         visible: false
        //     }
        // });
    
        // var legToLeg = this.matter.constraint.create({
        //     bodyA: leftLowerLeg,
        //     bodyB: rightLowerLeg,
        //     stiffness: 0.01,
        //     render: {
        //         visible: false
        //     }
        // });
    
        // var person = this.matter.composite.create({
        //     bodies: [
        //         chest, head, leftLowerArm, leftUpperArm, 
        //         rightLowerArm, rightUpperArm, leftLowerLeg, 
        //         rightLowerLeg, leftUpperLeg, rightUpperLeg
        //     ],
        //     constraints: [
        //         upperToLowerLeftArm, upperToLowerRightArm, chestToLeftUpperArm, 
        //         chestToRightUpperArm, headContraint, upperToLowerLeftLeg, 
        //         upperToLowerRightLeg, chestToLeftUpperLeg, chestToRightUpperLeg,
        //         legToLeg
        //     ]
        // });

        // this.matter.composite.add(person);
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
