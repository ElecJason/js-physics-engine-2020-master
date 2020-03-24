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

function anime()
{
	var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
	let point = new Point(getRandomNumber(width), getRandomNumber(height), getRandomNumber(width / 20), randomColor);
	point.draw(context);	
}

setInterval(anime, 1);