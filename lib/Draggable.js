/*
	23-2-2020
	klasse om punten op de 2d context van een canvas te tekenen

	eigenschappen
	* pos (positie van het middelpunt m.b.v. een Vector2d)
	* radius (grootte van de cirkel in pixels)
	* color (kleur van het punt, als String)
*/

class Point {

  constructor(x, y,radius,color){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;
	}

  draw(context){
  		context.beginPath();
		context.lineWidth = "6"
		context.fillStyle = this.color;
		context.arc(this.x, this.y, this.radius , 0, Math.PI*2);

		context.stroke();
		context.closePath();
		context.fill();
	}
}
