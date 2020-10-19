const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let img_dices, event, i, widthTotal, widthDice;


i = 1;
img_dices = new Image();
img_dices.src = "images/dice.png";

setInterval(animate,10)
img_dices.addEventListener('load',()=>{
	widthTotal = img_dices.width
	widthDice = widthTotal / 6;
})

function animate(){
	// console.log(widthTotal, widthDice);
	addEventListener('keydown',(e)=>{
		i = Math.floor(Math.random(1,6)*10);
		console.log(i);

        context.drawImage(img_dices,128*i,0,128,128,50,50,200,200);
        return;
    })


}


