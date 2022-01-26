class Ground {
    constructor(){
        var options ={
            isStatic : true
        }

        this.body = Bodies.rectangle(100,400,100,10,options)
        World.add(world,this.body);
    }

    display(){
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x, this.body.position.y, 100, 10);

    }

}