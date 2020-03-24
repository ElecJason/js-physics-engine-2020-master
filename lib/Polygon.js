class Polygon {

  constructor(points){
  	this.points = points;
  	this.randomValue = randomValue;
  	
	}

  draw(context){
  		for(let i=0; i<randomValue; i++){
			this.points[i].draw(context)	
		}

		context.beginPath();
		context.lineWidth = "2"
		context.moveTo(this.points[0].x, this.points[0].y);

		for(let i=1; i<this.points.length; i++){
			let RandomColor = getRandomColor();
			context.beginPath();
			context.strokeStyle = RandomColor;
			context.moveTo(this.points[i-1].x, this.points[i-1].y);
			context.lineTo(this.points[i].x, this.points[i].y);
			context.closePath();
			context.stroke();
		}

			context.beginPath();
			//context.strokeStyle = RandomColor;
			context.moveTo(this.points[this.points.length-1].x, this.points[this.points.length-1].y);
			context.lineTo(this.points[0].x, this.points[0].y);
			
			context.stroke();

  	}
}