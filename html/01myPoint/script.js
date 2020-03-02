const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

function getRandomNumber(max){
	return Math.floor(Math.random()*max);
}

// context.fillStyle = colors[getRandomNumber(colors.length)];

let point = new Point(new Vector2d(getRandomNumber(width), getRandomNumber(height)), getRandomNumber(width / 20), "red");

function anime()
{
	point.draw(context);	
}

setInterval(anime, 100);