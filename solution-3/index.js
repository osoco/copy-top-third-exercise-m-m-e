'use strict';
const canvas = document.getElementById('canvas');
const newCanvas = document.getElementById('newCanvas');
const photo = document.querySelector('.photo');
const img = new Image();
let context;
let third;

if (canvas.getContext) {
  context = canvas.getContext('2d');
  console.log(context);
};

const copyTopThird = picture => {
  img.src = picture.src;
  console.log(picture.src);
  context.drawImage(img, 0, 0);

  context.canvas.width = picture.width;
  context.canvas.height = picture.height;
  // const y = picture.height * 2/3;
  // console.log('y:', y);

  newCanvas.style.width = `${picture.width}px`;
  newCanvas.style.height = `${picture.height / 3}px`;
  const myImageData = context.getImageData(0, 0, picture.width, (picture.height / 3));
  console.log(myImageData);
  // context.putImageData(myImageData, 0, 0, 0, 0, myImageData.width, myImageData.height);
  // console.log(context);
  // context.putImageData(myImageData, 0, y);
};

img.addEventListener('load', copyTopThird(photo), false);