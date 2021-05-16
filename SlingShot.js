class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            length: 10,
            stiffness: 0.04,
            bodyA: bodyA,
            pointB: pointB,
        }
        this.slingShot = Constraint.create(options)
        World.add(world, this.slingShot)
        this.pointB=pointB
    }

    fly(){
        this.slingShot.bodyA=null
    }

    display() {
        if(this.slingShot.bodyA!=null){
            var pointA = this.slingShot.bodyA.position
            var pointB = this.pointB
            strokeWeight(4)
            line (pointA.x,pointA.y,pointB.x,pointB.y)
        }
       
    }


}