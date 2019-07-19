'use strict';
const newCanvas = document.getElementById('newCanvas');
const photo = document.querySelector('.photo');
let context;

if (newCanvas.getContext) {
  context = newCanvas.getContext('2d');
};


function copyTopThird(picture) {
  const ctx = document.getElementById('canvas').getContext('2d');
  ctx.canvas.width = picture.width;
  ctx.canvas.height = picture.height;
  const img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
  };
  img.src = '../assets/alan_kay.jpg';

  const y = picture.height * 2/3;
  newCanvas.style.width = `${picture.width}px`;
  newCanvas.style.height = `${picture.height / 3}px`;
  // const myImageData = ctx.getImageData(0, 0, picture.width, (picture.height / 3));
  const myImageData = ctx.getImageData(0, 0, picture.width, picture.height  );
  console.log(myImageData);
  console.log(context);
  context.putImageData(myImageData, 0, y);
}

copyTopThird(photo);