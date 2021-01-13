class SlingShot{
    //creating a constructor
    constructor(bodyA, pointB){
        //creating the options for the slingshot
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //loading the img for the slings
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        //creating the constraint
        this.sling = Constraint.create(options);
        //adding the sling to the world
        World.add(world, this.sling);
    }

    fly(){
        //after realising bodyA won't have any object assind so the bird will fly
        this.sling.bodyA = null;
    }

    display(){
        //displaying the images
        image(this.sling1,200,20);
        image(this.sling2,170,20)
        //if there is a body A we assign a pointa and a pointB
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
            //making the sling react to the direction we are pulling it 
            if(pointA.x<220){
             strokeWeight(8);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30, pointB.y-3)
            image(this.sling3,pointA.x-30, pointA.y-10, 15,30)
        }
        else{
            strokeWeight(5)
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+30, pointB.y-3)
            image(this.sling3,pointA.x+25, pointA.y-10, 15,30)

        }
        pop();

    }

    }
    
}