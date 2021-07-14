class Drops {
    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            restitution: 0.3,
            friction: 0,
            density:0.3
        }
       this.body = Bodies.circle(x,y,radius,options);
       this.radius = radius;
       World.add(world,this.body);
    }   
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS)
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.radius,this.radius);
        pop(); 
    }
    updateY() {
        if(this.body.position.y > height)
           Matter.Body.setPosition(this.body,{x:random(50,width-50),y:random(0,height/2)})
    }
   }