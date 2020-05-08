const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//Begin hier
let A,B,C;
let D,E,F;
let d,e,f;
let trans;

A = new Point(100,200,20,"red",true);
B = new Point(600,300,20,"blue",true);
C = new Point(200,500,20,"green", true);


D = new Point(0,0,10,"white",false);
E = new Point(0,0,10,"white",false);
F = new Point(0,0,10,"white", false);

d = new Vector2d();
e = new Vector2d();
f = new Vector2d();

trans = new Vector2d(200,100);
function animate(){
	context.clearRect(0,0,width,height);
	context.fillStyle = "rgba(255,255,0,0.2)"
	context.beginPath();
	context.moveTo(A.vPos.dx,A.vPos.dy);
	context.lineTo(B.vPos.dx,B.vPos.dy);
	context.lineTo(C.vPos.dx,C.vPos.dy);
	context.closePath();
	context.stroke();
	context.fill();

	
	A.draw(context);
	B.draw(context);
	C.draw(context);
	

	d.vectorSum(A.vPos,trans);
	e.vectorSum(B.vPos,trans);
	f.vectorSum(C.vPos,trans);
	D.vPos = d;
	E.vPos = e;
	F.vPos = f;

	context.fillStyle = "rgba(255,0,0,0.2)"
	context.beginPath();
	context.moveTo(D.vPos.dx,D.vPos.dy);
	context.lineTo(E.vPos.dx,E.vPos.dy);
	context.lineTo(F.vPos.dx,F.vPos.dy);
	context.closePath();
	context.stroke();
	context.fill();

	D.draw(context);
	E.draw(context);
	F.draw(context);
}

setInterval(animate,10);