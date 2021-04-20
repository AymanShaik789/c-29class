class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            if(this.sling.bodyA.position.x > 250){
                line(pointA.x - 12, pointA.y, pointB.x, pointB.y);
                line(pointA.x - 12, pointA.y, pointB.x + 30, pointB.y);
                image(this.image3, pointA.x + 20, pointA.y - 10, 15, 30);
                } 
                else{    
                line(pointA.x - 12, pointA.y, pointB.x, pointB.y);
                line(pointA.x - 12, pointA.y, pointB.x + 30, pointB.y);
                image(this.image3, pointA.x - 20, pointA.y - 10, 15, 30);
                }
        }

        image(this.image1, 200, 20);
        image(this.image2, 170,20);

    }
    
}