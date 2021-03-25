class Ground{
    constructor(){
       var options ={
           isStatic:true
       }
       this.body = Bodies.rectangle(600,590,1200,15,options);
       this.width = 500;
       this.height = 20;
       World.add(world,this.body);
    };
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(200);
        rect(250,750, this.width, this.height);
      }
}