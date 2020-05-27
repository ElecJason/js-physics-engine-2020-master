const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//Begin hier
let A,B,C;
let ab,bc,ca;
let lBC,lAB;

A = new Point(100,100,15,"red",true);
B = new Point(600,150,15,"green",true);
C = new Point(300,300,15,"blue", true);

ab = new LinearFunction(1,1);
bc = new LinearFunction(1,1);
ac = new LinearFunction(1,1);

mAB = new Point(0,0,5,"black");
mBC = new Point(0,0,5,"black");

lAB = new LinearFunction(1,1);
lBC = new LinearFunction(1,1);

circumCenter = new Point(0,0,5,"white");


function animate(){
	context.clearRect(0,0,width,height);

	context.fillStyle = "rgba(255,0,0,0.5)";
	context.moveTo(A.x,A.y);
	context.lineTo(B.x,B.y);
	context.lineTo(C.x,C.y);
	context.closePath();
	context.stroke();
	context.fill();

	ab.slope = (B.y - A.y)/(B.x - A.x);
	ab.intercept = B.y - B.x*ab.slope;
	ab.draw(context);

	bc.slope = (B.y - C.y)/(B.x - C.x);
	bc.intercept = B.y - B.x*bc.slope;
	bc.draw(context);

	ac.slope = (A.y - C.y)/(A.x - C.x);
	ac.intercept = A.y - A.x*ac.slope;
	ac.draw(context);
	
	A.draw();
	B.draw();
	C.draw();

	lAB.slope = -1/ab.slope;
	lAB.intercept = mAB.y - mAB.x * lAB.slope;
	lAB.draw(context);

	lBC.slope = -1/bc.slope;
	lBC.intercept = mBC.y - mBC.x * lBC.slope;
	lBC.draw(context);

	mAB.x = (A.x + B.x) / 2;
	mAB.y = (A.y + B.y) / 2;
	mAB.draw();

	mBC.x = (B.x + C.x) / 2;
	mBC.y = (B.y + C.y) / 2;
	mBC.draw();


	circumCenter.x = lAB.interception(lBC).x;
	circumCenter.y = lAB.interception(lBC).y;

	let dx = circumCenter.x - A.x;
	let dy = circumCenter.y - A.y;

	circumCenter.draw();

	distance = Math.sqrt(dx * dx + dy * dy);

	context.beginPath();
	context.arc(circumCenter.x,circumCenter.y,distance,0,2*Math.PI);
	context.stroke();
}

setInterval(animate,10);