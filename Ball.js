class Ball {

	constructor(x, y){

		var options = {

            isStatic : false,
            restitution : 1.0,
            friction : 0.5,
            density : 3		
			
		}

		this.body = Bodies.circle(x, y, 25, options);
        World.add(world, this.body);

		this.x = x;
		this.y = y;

		this.width = 77;
		this.height = 77;

        this.image = loadImage("ball.png");

	}
	display(){
				
		var Pos = this.body.position;		
		
		push()
		translate(Pos.x, Pos.y);
		imageMode(CENTER)
		
		image(this.image, 0, 0, this.width-5, this.height-5);
		pop()
		
	}

}