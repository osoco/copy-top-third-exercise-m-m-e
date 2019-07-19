copyTopThird(picture){
  width = getWidth(picture);
  height = getHeight(picture);
  thirdOfHeight = height / 3;

  pictureParts = splitPicture(0, thirdOfHeight); <!-- splits picture into 3 parts - into array -->
  firstPart = pictureParts.first(); <!-- gets first part of image - first item of array -->
  pictureParts.last().replace(firstPart); <!-- replaces last item of array with first item -->

  return pictureParts; <!-- returns array with last part replaced -->
}


functions:

getWidth(element)
getHeight(element)
splitPicture(pointToSplit-x, pointToSplit-y) <!-- splits picture as many times as it can -->
first()
last()
replace(newItem)