class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
      //  this.sling1 = loadImage('sprites/sling1.png');
       
        this.Chain= Constraint.create(options);
        World.add(myWorld, this.Chain);
    }
   
   show(){
     //   image(this.sling1,200,20);
        
     
            var pointA = this.Chain.bodyA.position;
            var pointB = this.Chain.bodyB.position;
           
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}