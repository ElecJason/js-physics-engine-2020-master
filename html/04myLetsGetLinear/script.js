const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//Begin hier

let myLine = new LinearFunction(-0.5,300);

let A = new Point(100,100,20,"red",true);
let B = new Point(500,500,20,"blue",true);

function animate(){
	context.clearRect(0,0,width,height);
	myLine.draw(context);
	A.draw(context);
	B.draw(context);
	
	myLine.slope = (B.y - A.y) / (B.x - A.x);
	myLine.intercept = B.y - myLine.slope * B.x;

	myLine.draw(context);
}

setInterval(animate,10);