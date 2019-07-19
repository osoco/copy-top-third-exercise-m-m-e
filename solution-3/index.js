'use strict';
const canvas = document.getElementById('canvas');
const newCanvas = document.getElementById('newCanvas');
const photo = document.querySelector('.photo');
let context;
let third;

if (canvas.getContext) {
  context = canvas.getContext('2d');
};

const copyTopThird = picture => {

  const img = new Image();   // Create new img element
  img.src = picture.src;

  console.log(context);
  context.canvas.width = picture.width;
  context.canvas.height = picture.height;
  const y = picture.height * 2/3;
  console.log('y:', y);

  newCanvas.style.width = `${picture.width}px`;
  newCanvas.style.height = `${picture.height / 3}px`;
  const myImageData = context.getImageData(0, 0, picture.width, (picture.height / 3));
  console.log(myImageData);
  // context.putImageData(myImageData, 0, 0, 0, 0, myImageData.width, myImageData.height);
  // console.log(context);
  context.putImageData(myImageData, 0, y);
};

copyTopThird(photo);