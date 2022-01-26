class Player{
    constructor(){
        var options ={
            restitution : 0
        } 
        this.life = 3;
        this.dist = 20;
        this.vida = loadImage("armor5.png");
        this.body = Bodies.rectangle(100,100,40,40,options)
        World.add(world,this.body);

    }
    
    showLife(){
        for(var i = 0; i < this.life; i++){
            imageMode(CENTER);
            image(this.vida, 10 +   this.dist , 50, 20, 20);
        }
    }

    display(){
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x, this.body.position.y, 40, 40);

    }

}