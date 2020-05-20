const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//Begin hier
let A,B,C;
let ab,bc,ca;
let altitudeAB ,altitudeBC, altitudeAC;

A = new Point(100,100,15,"red",true);
B = new Point(600,150,15,"green",true);
C = new Point(300,300,15,"blue", true);

ab = new LinearFunction(1,1);
bc = new LinearFunction(1,1);
ac = new LinearFunction(1,1);

altitudeAB = new LinearFunction(1,1);
altitudeBC = new LinearFunction(1,1);
altitudeAC = new LinearFunction(1,1);


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
	
	altitudeBC.slope = -1/bc.slope;
	altitudeBC.intercept = A.y - A.x * altitudeBC.slope;
	altitudeBC.draw(context);

	altitudeAB.slope = -1/ab.slope;
	altitudeAB.intercept = C.y - C.x * altitudeAB.slope;
	altitudeAB.draw(context);

	altitudeAC.slope = -1/ac.slope;
	altitudeAC.intercept = B.y - B.x * altitudeAC.slope;
	altitudeAC.draw(context);

	A.draw();
	B.draw();
	C.draw();
}

setInterval(animate,10);