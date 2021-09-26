let i = 0;
let images = [];
let time = 3000;

images[0] = "/img/garso1.jpeg";
images[1] = "/img/anunturi/garsoI1.jpg";
images[2] = "/img/anunturi/garsoI2.jpg";

let changeImg = () => {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
};

window.onload = changeImg;
