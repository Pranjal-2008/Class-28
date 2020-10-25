class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stifness: 0.04,
            length:20
        }
        this.pointB = pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling);
    }
     fly(){
         this.sling.bodyA = null;
     }

     attatched(body){
         this.sling.bodyA = body;
     }
    display(){
        if (this.sling.bodyA){

        
        var pa = this.sling.bodyA.position;
        var pb = this.pointB;
        stroke("brown");
        strokeWeight(5);
        line(pa.x,pa.y,pb.x,pb.y);
    }
}
}