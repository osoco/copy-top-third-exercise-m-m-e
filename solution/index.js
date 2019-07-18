'use strict';
const photo = document.querySelector('.photo');
const photoBox = document.querySelector('.img__container');

const makeNewImage = () => {
  const newImage = document.createElement('img');
  newImage.classList.add('photo');
  return newImage;
}

const copyTopThird = picture => {
  const newImage = makeNewImage();
  const originalSrc = picture.src;
  const originalHeight = picture.height;
  const originalWidth = picture.width;
  const newHeight = originalHeight / 3;

  newImage.src = originalSrc;

  photoBox.appendChild(newImage);
}

copyTopThird(photo);


// const canvas = document.getElementById('canvas');
// const photo = document.querySelector('.photo');
// let context;
// let third;

// if (canvas.getContext) {
//     context = canvas.getContext('2d');
// };

// const copyTopThird = picture => {
//   console.log(context);
//   context.canvas.width = picture.width;
//   context.canvas.height = picture.height;
//   const y = picture.height * 2/3;
//   console.log('y:', y);

//   const myImageData = context.getImageData(0, 0, picture.width, (picture.height / 3));
//   console.log(myImageData);
//   // context.putImageData(myImageData, 0, 0, 0, 0, myImageData.width, myImageData.height);
//   // console.log(context);
//   context.putImageData(myImageData, 0, y);
// };

// copyTopThird(photo);