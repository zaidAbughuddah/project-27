class Chain{
    constructor(bodyA, bodyB, offsetX, offsetY){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x: this.offsetX, y: this.offsetY}
        }
       
        
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x + this.offsetX, pointB.y + this.offsetY)
    }
    
}