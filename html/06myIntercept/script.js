const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//Begin hier
let A,B,C,D,S,f,g;

A = new Point(100,200,20,"red",true);
B = new Point(600,300,20,"blue",true);
C = new Point(200,500,20,"green", true);
D = new Point(400,600,20,"yellow",true);
S = new Point(0,0,10,"white");
f = new LinearFunction(1,1);
g = new LinearFunction(1,1);

function animate(){
	context.clearRect(0,0,width,height);
	A.draw(context);
	B.draw(context);
	C.draw(context);
	D.draw(context);

	f.slope = (A.y - B.y)/(A.x - B.x);
	f.intercept = A.y - A.x * f.slope;
	f.draw(context);	

	g.slope = (C.y - D.y)/(C.x - D.x);
	g.intercept = C.y - C.x * g.slope;
	g.draw(context);

	S.x = f.interception(g).x;
	S.y = f.interception(g).y;
	S.draw(context);
}

setInterval(animate,10);