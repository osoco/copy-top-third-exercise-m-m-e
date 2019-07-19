'use strict';
const photo = document.querySelector('.photo');
const photoBox = document.querySelector('.img__container');
const newPictureBox = document.querySelector('.images');

const copyTopThird = picture => {
  const originalSrc = picture.src;
  const originalHeight = picture.height;
  const originalWidth = picture.width;
  const newHeight = originalHeight / 3;

  newPictureBox.setAttribute('style', `height: ${newHeight}px; width: ${originalWidth}px;`);
  newPictureBox.style.backgroundImage = `url('${originalSrc}')`;
}

copyTopThird(photo);