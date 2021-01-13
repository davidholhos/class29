class Bird extends BaseClass {

  constructor(x,y){
    var options ={
      density:5.0
    }
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
