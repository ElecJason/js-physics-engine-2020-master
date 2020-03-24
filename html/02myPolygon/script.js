const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let points = [];
let randomValue = getRandomInt(3,10);

for(let i=0; i<randomValue; i++){
	let x = getRandomInt(0,width);
	let y = getRandomInt(0,height);
	let RandomColor = getRandomColor();
	let myPoint = new Point(x,y,10,RandomColor,i);
	points.push(myPoint);
}

let myPolygon = new Polygon(points);
myPolygon.draw(context);

