class Box{
    constructor(x,y,width,height){
        var option_body={
         restitution:0.8

        }
        this.body=Bodies.rectangle(x,y,width,height,option_body);
        World.add(world,this.body);
        this.w=width;
        this.h=height;
       
    
    
    }
    display(){
        var pos=this.body.position; 
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);

    }

}