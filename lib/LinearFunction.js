class LinearFunction {
    constructor(slope, intercept) {
        this.slope = slope;
        this.intercept = intercept;
    }

    y(x){
    	return x*this.slope + this.intercept;
    }

    draw(context){
    	context.moveTo(0,this.y(0));
    	context.lineTo(canvas.width,this.y(canvas.width));
    	context.stroke();
    }
}