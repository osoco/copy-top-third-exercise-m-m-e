## HTML
```
<div class="img__container" style="position: relative">
  <img src="../assets/alan_kay.jpg" alt="original photo" class="photo">
  <div class="images"></div>
</div>
```

## JavaScript

```
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

```

## CSS

```
.images {
  position: absolute;
  left: 0;
  bottom: 0;
}
```