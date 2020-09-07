const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//Begin hier
let img,angle,angle1,angle2;

img = new Image();
img1 = new Image();
img2 = new Image();
img.src = "images/cog.png";
img1.src = "images/cog.png";
img2.src = "images/cog.png";

angle = 0.01;
angle1 = 0.01;
angle2 = 0.01;

img.addEventListener('load',()=>{
	setInterval(animate, 10);
})

function animate(){
	context.clearRect(0,0,width,height);
	context.save();
	context.translate(300,300);
	context.rotate(angle);
	context.drawImage(img, -150,-150,300,300);
	context.restore();
	angle += 0.01;

	context.save();
	context.translate(520,475);
	context.rotate(angle1);
	context.drawImage(img1,-150,-150,300,300);
	context.restore();
	angle1 -= 0.01;

	context.save();
	context.translate(740,300);
	context.rotate(angle2);
	context.drawImage(img2,-150,-150,300,300);
	context.restore();
	angle2 += 0.01;
}


