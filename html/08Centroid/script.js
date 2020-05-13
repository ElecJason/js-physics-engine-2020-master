const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//Begin hier
let A,B,C;
let LAB,LBB,LBC;
let MAB,MBC,MAC;
let lCMAB,lAMBC,lBMAC;
let line;
let S;

A = new Point(100,100,40,"red",true);
B = new Point(600,150,40,"green",true);
C = new Point(300,300,40,"blue", true);

MAB = new Point(50,50,10,"white",false);
MBC = new Point(50,50,10,"white",false);
MAC = new Point(50,50,10,"white",false);

LAB = new LinearFunction(1,1);
LBC = new LinearFunction(1,1);
LCA = new LinearFunction(1,1);

lAMBC = new LinearFunction(1,1);
lBMAC = new LinearFunction(1,1);
lCMAB = new LinearFunction(1,1);

//line = new LinearFunction(1,1);
S = new Point(200,200,10,"black",false);

function animate(){
	context.clearRect(0,0,width,height);
	
	A.draw();
	B.draw();
	C.draw();

	MAB.x = (A.x + B.x) / 2;
	MAB.y = (A.y + B.y) / 2; 
	MAB.draw();

	MBC.x = (B.x + C.x) / 2;
	MBC.y = (B.y + C.y) / 2; 
	MBC.draw();

	MAC.x = (A.x + C.x) / 2;
	MAC.y = (A.y + C.y) / 2; 
	MAC.draw();

	LAB.slope = (B.y - A.y)/(B.x - A.x);
	LAB.intercept = A.y - A.x * LAB.slope;
	LAB.draw(context, "green");

	LBC.slope = (B.y - C.y)/(B.x - C.x);
	LBC.intercept = B.y - B.x * LBC.slope;
	LBC.draw(context, "green");

	LCA.slope = (A.y - C.y)/(A.x - C.x);
	LCA.intercept = A.y - A.x * LCA.slope;
	LCA.draw(context, "green");

	lCMAB.slope = (C.y - MAB.y)/(C.x - MAB.x);
	lCMAB.intercept = C.y - C.x * lCMAB.slope;
	lCMAB.draw(context,"gray");

	lAMBC.slope = (A.y - MBC.y)/(A.x - MBC.x);
  	lAMBC.intercept = A.y - A.x * lAMBC.slope;
  	lAMBC.draw(context,"gray");

  	lBMAC.slope = (B.y - MAC.y)/(B.x - MAC.x);
	lBMAC.intercept = B.y - B.x * lBMAC.slope;
	lBMAC.draw(context,"gray");

	S.x = lAMBC.interception(lCMAB).x;
	S.y = lAMBC.interception(lCMAB).y;
	S.draw();

}

setInterval(animate,10);