class Hook {

    constructor(x,y) {

      var options = {

        isStatic: true

      }

      this.body = Bodies.rectangle(x, y, 5, 70, options);

      this.width = 5;
      this.height = 70;

      World.add(world, this.body);

    }

    display(){

      var pos = this.body.position;
      rectMode(CENTER);
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);

    }

}
