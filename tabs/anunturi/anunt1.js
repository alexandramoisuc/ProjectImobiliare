let i = 0;
let images = [];
let time = 3000;

images[0] = "/img/ap1.jpeg";
images[1] = "/img/anunturi/apartI1.jpg";
images[2] = "/img/anunturi/apartI2.jpg";
images[3] = "/img/anunturi/apartI3.jpg";
images[4] = "/img/anunturi/apartI4.jpg";

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
