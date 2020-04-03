class Point {

  constructor(x,y,radius,color,draggable){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.draggable = draggable || false;

    if(draggable){
      this.drag();
      }
    }

    drag(){
      addEventListener('mousedown',(evt) =>{
        console.log(evt)
      })
    }

    drag(){
      let mouseCoord ={};
      let distance;
      let dragging = false;
    
      addEventListener('mousedown',(evt) => {
        mouseCoord.x = evt.clientX;
        mouseCoord.y = evt.clientY;
    
        let dx = mouseCoord.x - this.x;
        let dy = mouseCoord.y - this.y;
    
        distance = Math.sqrt(dx*dx + dy*dy);
        if(distance < this.radius){
          dragging = true
        }
        else{
          dragging = false
        }
      });
    
      addEventListener('mousemove',(evt) => {
        if(dragging){
          this.x = evt.clientX;
          this.y = evt.clientY;
          console.log(evt.clientX);
          console.log(evt.clientY);
        }
      });
    
      addEventListener('mouseup',() => {
        dragging = false;
      });
    }

  draw(){
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x,this.y,this.radius,0,Math.PI*2);
    context.stroke();
    context.fill();
  }
}
