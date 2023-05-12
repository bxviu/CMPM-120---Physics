// class Example extends Phaser.Scene
// {
//     preload ()
//     {
//     }

//     create ()
//     {   
//         // https://labs.phaser.io/edit.html?src=src/physics/matterjs/basic%20constraint.js
//         // const text = this.add.text(100, 0, 'Phaser 3', { font: '32px Arial', fill: '#00ff00' });
//         // const text2 = this.add.text(100, -100, 'Phaser 3', { font: '32px Arial', fill: '#ffff00' });

//         // const matterText = this.matter.add.gameObject(text, { shape: { type: 'polygon', sides: 8, radius: 64 } }).setFrictionAir(0.001).setBounce(0.9);
//         // const matterText2 = this.matter.add.gameObject(text2).setFrictionAir(0.001).setBounce(0.9);

//         // matterText2.setVelocity(5, 10);
// //         let leftarm = this.matter.add.rectangle(350, 400, 25, 75, );
// // //https://labs.phaser.io/edit.html?src=src/physics/matterjs/snake.js
// //         let upperbody = this.matter.add.rectangle(400, 400, 50, 75,);

// //         // this.matter.body.setCentre(upperbody, {x:400,y:370}, false);

// //         let lowerbody = this.matter.add.rectangle(400, 480, 50, 75, );
// //         // let leftarm = this.add.rectangle(350, 400, 25, 75, { fillStyle: '#ffff00' });
// //         // let bruh = this.matter.add.gameObject(leftarm); //.setOrigin(0.5, 0);
// //         this.matter.body.setCentre(leftarm, {x:350,y:370}, false);
// //         let rightarm = this.matter.add.rectangle(450, 400, 25, 75, { isStatic: true });
// //         // this.matter.add.constraint(upperbody, leftarm, 40, 0.2);
// //         console.log(this.matter.constraint.create({
// //             bodyA: upperbody,
// //             pointA: {
// //                 x: 400,
// //                 y: 370
// //             },
// //             pointB: {
// //                 x: 350,
// //                 y: 400
// //             },
// //             bodyB: leftarm,
// //             stiffness: 0.6,
// //             render: {
// //                 visible: true
// //             }
// //         }));
// //         this.matter.add.constraint(upperbody, lowerbody, 75, 1);
// //         // this.matter.add(leftarm);
// //         this.matter.add.constraint(leftarm, upperbody, 40);
// //         let leftleg  = this.matter.add.rectangle(375, 550, 25, 75, { isStatic: true });
// //         let rightleg = this.matter.add.rectangle(425, 550, 25, 75, { isStatic: true });
// //         let head = this.matter.add.circle(400, 330, 30,);

// //         let headtobod = this.matter.constraint.create({ 
// //             bodyA: upperbody,
// //             // pointA: {x: 400, y: 370},
// //             // pointB: {x: 0, y: 0},
// //             bodyB: head,
// //             stiffness: 0.01,
// //         });
        
// //         this.matter.add.constraint(upperbody, head, 70, 1);
// //         console.log(this.matter.constraint.currentLength(headtobod));
// //         // this.matter.add.constraint(headtobod);
// //         console.log(headtobod);


        // let ground = this.matter.add.rectangle(400, 650, 800, 100, { isStatic: true });

// //         // const ballA = this.matter.add.circle(420, 100, 10);
// //         // const ballB = this.matter.add.circle(400, 200, 10);
// //         // this.matter.add.constraint(ballA, ballB, 100, 0.2);

//         console.log(this);

//         this.matter.add.mouseSpring();

//         let scale = 2;
//         let x = 400, y = 400;
    
//         var head = this.matter.add.rectangle(x, y - 60 * scale, 34 * scale, 40 * scale,);
//         var chest = this.matter.add.rectangle(x, y, 55 * scale, 80 * scale, );
//         var rightUpperArm = this.matter.add.rectangle(x + 39 * scale, y - 15 * scale, 20 * scale, 40 * scale, );
//         var rightLowerArm = this.matter.add.rectangle(x + 39 * scale, y + 25 * scale, 20 * scale, 60 * scale, );
//         var leftUpperArm = this.matter.add.rectangle(x - 39 * scale, y - 15 * scale, 20 * scale, 40 * scale, );
//         var leftLowerArm = this.matter.add.rectangle(x - 39 * scale, y + 25 * scale, 20 * scale, 60 * scale, );
//         var leftUpperLeg = this.matter.add.rectangle(x - 20 * scale, y + 57 * scale, 20 * scale, 40 * scale, );
//         var leftLowerLeg = this.matter.add.rectangle(x - 20 * scale, y + 97 * scale, 20 * scale, 60 * scale, );
//         var rightUpperLeg = this.matter.add.rectangle(x + 20 * scale, y + 57 * scale, 20 * scale, 40 * scale, );
//         var rightLowerLeg = this.matter.add.rectangle(x + 20 * scale, y + 97 * scale, 20 * scale, 60 * scale, );
    
//         var chestToRightUpperArm = this.matter.constraint.create({
//             bodyA: chest,
//             pointA: {
//                 x: 24 * scale,
//                 y: -23 * scale
//             },
//             pointB: {
//                 x: 0,
//                 y: -8 * scale
//             },
//             bodyB: rightUpperArm,
//             stiffness: 0.6,
//             render: {
//                 visible: false
//             }
//         });
    
//         var chestToLeftUpperArm = this.matter.constraint.create({
//             bodyA: chest,
//             pointA: {
//                 x: -24 * scale,
//                 y: -23 * scale
//             },
//             pointB: {
//                 x: 0,
//                 y: -8 * scale
//             },
//             bodyB: leftUpperArm,
//             stiffness: 0.6,
//             render: {
//                 visible: false
//             }
//         });
    
//         var chestToLeftUpperLeg = this.matter.constraint.create({
//             bodyA: chest,
//             pointA: {
//                 x: -10 * scale,
//                 y: 30 * scale
//             },
//             pointB: {
//                 x: 0,
//                 y: -10 * scale
//             },
//             bodyB: leftUpperLeg,
//             stiffness: 0.6,
//             render: {
//                 visible: false
//             }
//         });
    
//         var chestToRightUpperLeg = this.matter.constraint.create({
//             bodyA: chest,
//             pointA: {
//                 x: 10 * scale,
//                 y: 30 * scale
//             },
//             pointB: {
//                 x: 0,
//                 y: -10 * scale
//             },
//             bodyB: rightUpperLeg,
//             stiffness: 0.6,
//             render: {
//                 visible: false
//             }
//         });
    
//         var upperToLowerRightArm = this.matter.constraint.create({
//             bodyA: rightUpperArm,
//             bodyB: rightLowerArm,
//             pointA: {
//                 x: 0,
//                 y: 15 * scale
//             },
//             pointB: {
//                 x: 0,
//                 y: -25 * scale
//             },
//             stiffness: 0.6,
//             render: {
//                 visible: false
//             }
//         });
//         this.matter.body.setCentre(rightLowerArm, {x: 0, y: -25 * scale},  true);
//         this.matter.add.constraint(rightLowerArm, rightUpperArm, 50);
    
//         var upperToLowerLeftArm = this.matter.constraint.create({
//             bodyA: leftUpperArm,
//             bodyB: leftLowerArm,
//             pointA: {
//                 x: 0,
//                 y: 15 * scale
//             },
//             pointB: {
//                 x: 0,
//                 y: -25 * scale
//             },
//             stiffness: 0.6,
//             render: {
//                 visible: false
//             }
//         });
    
//         var upperToLowerLeftLeg = this.matter.constraint.create({
//             bodyA: leftUpperLeg,
//             bodyB: leftLowerLeg,
//             pointA: {
//                 x: 0,
//                 y: 20 * scale
//             },
//             pointB: {
//                 x: 0,
//                 y: -20 * scale
//             },
//             stiffness: 0.6,
//             render: {
//                 visible: false
//             }
//         });
    
//         var upperToLowerRightLeg = this.matter.constraint.create({
//             bodyA: rightUpperLeg,
//             bodyB: rightLowerLeg,
//             pointA: {
//                 x: 0,
//                 y: 20 * scale
//             },
//             pointB: {
//                 x: 0,
//                 y: -20 * scale
//             },
//             stiffness: 0.6,
//             render: {
//                 visible: false
//             }
//         });
    
//         var headContraint = this.matter.constraint.create({
//             bodyA: head,
//             pointA: {
//                 x: 0,
//                 y: 25 * scale
//             },
//             pointB: {
//                 x: 0,
//                 y: -35 * scale
//             },
//             bodyB: chest,
//             stiffness: 0.6,
//             render: {
//                 visible: false
//             }
//         });
    
//         var legToLeg = this.matter.constraint.create({
//             bodyA: leftLowerLeg,
//             bodyB: rightLowerLeg,
//             stiffness: 0.01,
//             render: {
//                 visible: false
//             }
//         });
    
//         var person = this.matter.composite.create({
//             bodies: [
//                 chest, head, leftLowerArm, leftUpperArm, 
//                 rightLowerArm, rightUpperArm, leftLowerLeg, 
//                 rightLowerLeg, leftUpperLeg, rightUpperLeg
//             ],
//             constraints: [
//                 upperToLowerLeftArm, upperToLowerRightArm, chestToLeftUpperArm, 
//                 chestToRightUpperArm, headContraint, upperToLowerLeftLeg, 
//                 upperToLowerRightLeg, chestToLeftUpperLeg, chestToRightUpperLeg,
//                 legToLeg
//             ]
//         });

//         // this.matter.composite.add(person);
//     }
// }

// const config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,
//     backgroundColor: '#1b1464',
//     parent: 'phaser-example',
//     physics: {
//         default: 'matter',
//         matter: {
//             debug: true,
//             gravity: {
//                 y: 0.3
//             }
//         }
//     },
//     scene: Example
// };

// const game = new Phaser.Game(config);

// Define the variables
var ragdoll;
var mouseConstraint;

class Example extends Phaser.Scene
{
    preload() {
    // Load the images for the body parts
    }

    create() {
        console.log(this.matter);
        let rectangle = this.matter.add.rectangle(100, 0, 100, 25);
        // rectangle.setVelocityX(-8);
        console.log(rectangle);
        let ground = this.matter.add.rectangle(400, 650, 800, 100, { isStatic: true });
        // Create the ragdoll body parts
        var head = this.matter.add.circle(400, 100, 20, { isStatic: false });
        var torso = this.matter.add.rectangle(400, 200, 40, 80, { isStatic: false });
        var upperarmL = this.matter.add.rectangle(350, 200, 20, 50, { isStatic: false });
        var upperarmR = this.matter.add.rectangle(450, 200, 20, 50, { isStatic: false });
        var forearmL = this.matter.add.rectangle(300, 200, 20, 40, { isStatic: false });
        var forearmR = this.matter.add.rectangle(500, 200, 20, 40, { isStatic: false });
        var handL = this.matter.add.rectangle(250, 200, 20, 20, { isStatic: false });
        var handR = this.matter.add.rectangle(550, 200, 20, 20, { isStatic: false });
        var thighL = this.matter.add.rectangle(400, 300, 20, 50, { isStatic: false });
        var thighR = this.matter.add.rectangle(400, 300, 20, 50, { isStatic: false });
        var legL = this.matter.add.rectangle(400, 350, 20, 40, { isStatic: false });
        var legR = this.matter.add.rectangle(400, 350, 20, 40, { isStatic: false });
        var footL = this.matter.add.rectangle(400, 400, 20, 20, { isStatic: false });
        var footR = this.matter.add.rectangle(400, 400, 20, 20, { isStatic: false });

        // Set the mass of the body parts
        this.matter.body.setMass(head, 10);
        this.matter.body.setMass(torso, 20);
        this.matter.body.setMass(upperarmL, 5);
        this.matter.body.setMass(upperarmR, 5);
        this.matter.body.setMass(forearmL, 3);
        this.matter.body.setMass(forearmR, 3);
        this.matter.body.setMass(handL, 2);
        this.matter.body.setMass(handR, 2);  
        this.matter.body.setMass(thighL, 10);
        this.matter.body.setMass(thighR, 10);
        this.matter.body.setMass(legL, 5);
        this.matter.body.setMass(legR, 5); 
        this.matter.body.setMass(footL, 2);
        this.matter.body.setMass(footR, 2);

        // Create the ragdoll using constraints
        var headC = this.matter.add.constraint(head, torso, 50, 1);
        var upperarmLC = this.matter.add.constraint(torso, upperarmL, 60, 1);
        var upperarmRC = this.matter.add.constraint(torso, upperarmR, -60, 1);
        var forearmLC = this.matter.add.constraint(upperarmL, forearmL, 45, 1);
        var forearmRC = this.matter.add.constraint(upperarmR, forearmR, -45, 1);
        var handLC = this.matter.add.constraint(forearmL, handL, 50, 1);
        var handRC = this.matter.add.constraint(forearmR, handR, 50, 1);
        var thighLC = this.matter.add.constraint(torso, thighL, -100, 1);
        var thighRC = this.matter.add.constraint(torso, thighR, 100, 1);
        var legLC = this.matter.add.constraint(thighL, legL, -45, 1);
        var legRC = this.matter.add.constraint(thighR, legR, 45, 1);
        var footLC = this.matter.add.constraint(legL, footL, -45, 1);
        var footRC = this.matter.add.constraint(legR, footR, 45, 1);

        // Set the collision categories and masks for each body part
        var category = 2; //this.matter.world.nextCategory();
        head.collisionFilter.category = category;
        torso.collisionFilter.category = category;
        upperarmL.collisionFilter.category = category;
        upperarmR.collisionFilter.category = category;
        forearmL.collisionFilter.category = category;
        forearmR.collisionFilter.category = category;
        handL.collisionFilter.category = category;
        handR.collisionFilter.category = category;
        thighL.collisionFilter.category = category;
        thighR.collisionFilter.category = category;
        legL.collisionFilter.category = category;
        legR.collisionFilter.category = category;
        footL.collisionFilter.category = category;
        footR.collisionFilter.category = category;

        // var mask = category;
        let mask = 1;
        head.collisionFilter.mask = mask;
        torso.collisionFilter.mask = mask;
        upperarmL.collisionFilter.mask = mask;
        upperarmR.collisionFilter.mask = mask;
        forearmL.collisionFilter.mask = mask;
        forearmR.collisionFilter.mask = mask;
        handL.collisionFilter.mask = mask;
        handR.collisionFilter.mask = mask;
        thighL.collisionFilter.mask = mask;
        thighR.collisionFilter.mask = mask;
        legL.collisionFilter.mask = mask;
        legR.collisionFilter.mask = mask;
        footL.collisionFilter.mask = mask;
        footR.collisionFilter.mask = mask;
        console.log(head);
        // head.setCollisionCategory(category);
        // torso.setCollisionCategory(category);
        // upperarmL.setCollisionCategory(category);
        // upperarmR.setCollisionCategory(category);
        // forearmL.setCollisionCategory(category);
        // forearmR.setCollisionCategory(category);
        // handL.setCollisionCategory(category);
        // handR.setCollisionCategory(category);
        // thighL.setCollisionCategory(category);
        // thighR.setCollisionCategory(category);
        // legL.setCollisionCategory(category);
        // legR.setCollisionCategory(category);
        // footL.setCollisionCategory(category);
        // footR.setCollisionCategory(category);

        // var mask = category;
        // head.setCollidesWith(mask);
        // torso.setCollidesWith(mask);
        // upperarmL.setCollidesWith(mask);
        // upperarmR.setCollidesWith(mask);
        // forearmL.setCollidesWith(mask);
        // forearmR.setCollidesWith(mask);
        // handL.setCollidesWith(mask);
        // handR.setCollidesWith(mask);
        // thighL.setCollidesWith(mask);
        // thighR.setCollidesWith(mask);
        // legL.setCollidesWith(mask);
        // legR.setCollidesWith(mask);
        // footL.setCollidesWith(mask);
        // footR.setCollidesWith(mask);

        // Add the mouse constraint to move the ragdoll with the mouse
        // mouseConstraint = this.matter.mouseConstraint.create(this.matter.world, { constraint: { stiffness: 0.2 } });
        // this.matter.world.add(mouseConstraint);
        this.matter.add.mouseSpring();
    }

    update() {
    // Update the mouse constraint position
        // if (mouseConstraint.mouse.button === 0) {
        //     var body = mouseConstraint.body;
        //     if (body) {
        //     var mouseX = mouseConstraint.mouse.absolute.x / this.game.scale.gameSize.width * this.game.scale.width;
        //     var mouseY = mouseConstraint.mouse.absolute.y / this.game.scale.gameSize.height * this.game.scale.height;
        //     this.matter.body.setPosition(body, { x: mouseX, y: mouseY });
        //     }
        // }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: {
                // y: 0.3
            }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);