## HTML
```
<div class="img__container" style="position: relative">
  <img src="../assets/alan_kay.jpg" alt="original photo" class="photo">
</div>
```

## JavaScript
```
const photo = document.querySelector('.photo');
const photoBox = document.querySelector('.img__container');

const makeNewImage = () => {
  const newImage = document.createElement('img');
  newImage.classList.add('new__photo');
  return newImage;
}

const copyTopThird = picture => {
  const newImage = makeNewImage();
  const originalSrc = picture.src;
  const originalHeight = picture.height;
  const originalWidth = picture.width;
  const newHeight = originalHeight / 3;

  newImage.src = originalSrc;
  newImage.setAttribute("style", `position: absolute;  clip: rect(0, ${originalWidth}px, ${newHeight}px, 0);`);

  photoBox.appendChild(newImage);
}

copyTopThird(photo);
```

## CSS
```
.new__photo{
  left: 0;
  top: 66.6%;;
}
```