'use strict';
// const canvas = document.getElementById('canvas');
const newCanvas = document.getElementById('newCanvas');
const photo = document.querySelector('.photo');
let context;
let third;

if (canvas.getContext) {
  context = canvas.getContext('2d');
  console.log(context);
};

const printPhoto = img => {
  context.drawImage(img, 0, 0);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
  };
  img.src = '../assets/alan_kay.jpg';
}

draw();


// const copyTopThird = picture => {
//   const img = new Image();
//   img.onLoad = printPhoto(img);

//   img.src = "../assets/alan_kay.jpg";

//   context.canvas.width = picture.width;
//   context.canvas.height = picture.height;
//   // const y = picture.height * 2/3;
//   // console.log('y:', y);

//   newCanvas.style.width = `${picture.width}px`;
//   newCanvas.style.height = `${picture.height / 3}px`;
//   // const myImageData = context.getImageData(0, 0, picture.width, (picture.height / 3));
//   // console.log(myImageData);
//   // context.putImageData(myImageData, 0, 0, 0, 0, myImageData.width, myImageData.height);
//   // console.log(context);
//   // context.putImageData(myImageData, 0, y);
// };

// copyTopThird(photo);
// // img.addEventListener('load', copyTopThird(photo), false);