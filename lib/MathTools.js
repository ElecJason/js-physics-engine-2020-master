/*
function returning a random number between a min and a maximum value
*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  let HexColor = "0123456789ABCDEF";
  let Hex = "#";

  for (var i = 0; i < 6; i++) {
    Hex += HexColor[Math.floor(Math.random() * 16)]
  }
  return Hex;
}
