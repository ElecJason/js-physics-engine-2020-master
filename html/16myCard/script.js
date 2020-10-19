const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let img,numberOnARow,numberOnAColumn,sx,sy,sw,sh,x,y,w,h,index;
img = new Image();
img.src = "images/cardDeck.png";

numberOnARow = 13;
numberOnAColumn = 5;

index = Math.floor(Math.random()*52);


img.addEventListener('load',()=>{
  sw = img.width/numberOnARow;
  sh = img.height/numberOnAColumn;
  animate();
})

function animate(){
  sx= (index%numberOnARow)*sw;
  sy = Math.floor(index/numberOnARow)*sh
  context.drawImage(img,sx,sy,sw,sh, 100,100,sw,sh)
}