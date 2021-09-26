const buttonToate = document.getElementById("cat1");
const buttonApart = document.getElementById("cat2");
const buttonGarso = document.getElementById("cat3");
const buttonCase = document.getElementById("cat4");
const anuntApart1 = document.getElementById("a1");
const anuntApart2 = document.getElementById("a2");
const anuntGarso1 = document.getElementById("a3");
const anuntGarso2 = document.getElementById("a4");
const anuntCase1 = document.getElementById("a5");
const anuntCase2 = document.getElementById("a6");
const middle = document.getElementById("middle");
const anunturi = document.getElementById("anunturi");

buttonApart.addEventListener("click", function () {
  anuntGarso1.style.display = "none";
  anuntGarso2.style.display = "none";
  anuntCase1.style.display = "none";
  anuntCase2.style.display = "none";
  anuntApart1.style.display = "flex";
  anuntApart2.style.display = "flex";
  middle.style.paddingBottom = "5%";
  middle.style.height = "25%";
  anunturi.style.height = "25%";
});

buttonGarso.addEventListener("click", function () {
  anuntApart1.style.display = "none";
  anuntApart2.style.display = "none";
  anuntCase1.style.display = "none";
  anuntCase2.style.display = "none";
  anuntGarso1.style.display = "flex";
  anuntGarso2.style.display = "flex";
  middle.style.paddingBottom = "5%";
  middle.style.height = "25%";
  anunturi.style.height = "25%";
});

buttonCase.addEventListener("click", function () {
  anuntGarso1.style.display = "none";
  anuntGarso2.style.display = "none";
  anuntApart1.style.display = "none";
  anuntApart2.style.display = "none";
  anuntCase1.style.display = "flex";
  anuntCase2.style.display = "flex";
  middle.style.paddingBottom = "5%";
  middle.style.height = "25%";
  anunturi.style.height = "25%";
});

buttonToate.addEventListener("click", function () {
  anuntGarso1.style.display = "flex";
  anuntGarso2.style.display = "flex";
  anuntApart1.style.display = "flex";
  anuntApart2.style.display = "flex";
  anuntCase1.style.display = "flex";
  anuntCase2.style.display = "flex";
  middle.style.paddingBottom = "25%";
  middle.style.height = "100%";
  anunturi.style.height = "90%";
});
