class ground {
    constructor(x,y,w,h) {
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        var g=Bodies.rectangle(this.x,this.y,this.w,this.h,{
            isStatic:true
        });
        World.add(world,g);
    }
    display() {
        rectMode(CENTER)
        rect(this.x,this.y,this.w,this.h);
    }
}