const username = document.getElementById("username");
const email = document.getElementById("theMail");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const theName = document.getElementById("the-name");
const checkbox = document.getElementById("check1");
const psw = document.getElementById("psw");
const pswVerif = document.getElementById("psw-verif");
const phone = document.getElementById("phone");
const password =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const userCheck = /^[A-Za-z]{4,}$/;
const nameCheck = /^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/;
const form = document.getElementById("form");
const submitBtn = document.getElementById("btn");

const paragraphAlert = document.createElement("p");
paragraphAlert.textContent = "Introdu un user.";
document.querySelector("#prepend1").prepend(paragraphAlert);
paragraphAlert.classList.add("faulty");

const emailAlert = document.createElement("p");
emailAlert.textContent = "Introdu o adresa de mail validă.";
document.querySelector("#prepend2").prepend(emailAlert);
emailAlert.classList.add("faulty");

const nameAlert = document.createElement("p");
nameAlert.textContent = "Introdu un nume valid.";
document.querySelector("#prepend3").prepend(nameAlert);
nameAlert.classList.add("faulty");

const pswAlert = document.createElement("p");
pswAlert.textContent = "Introdu o parolă validă.";
document.querySelector("#prepend4").prepend(pswAlert);
pswAlert.classList.add("faulty");

const pswVerifAlert = document.createElement("p");
pswVerifAlert.textContent = "Verifică parola.";
document.querySelector("#prepend5").prepend(pswVerifAlert);
pswVerifAlert.classList.add("faulty");

const phoneAlert = document.createElement("p");
phoneAlert.textContent = "Introdu un număr de telefon.";
document.querySelector("#prepend6").prepend(phoneAlert);
phoneAlert.classList.add("faulty");

const faultyUsername = () => {
  if (userCheck.test(username.value) === false) {
    return (paragraphAlert.style.display = "block");
  } else {
    return (paragraphAlert.style.display = "none");
  }
};

username.addEventListener("input", faultyUsername);

const faultyEmail = () => {
  if (emailFormat.test(email.value) === false) {
    return (emailAlert.style.display = "block");
  } else {
    return (emailAlert.style.display = "none");
  }
};

email.addEventListener("input", faultyEmail);

const faultyName = () => {
  if (nameCheck.test(theName.value) === false) {
    return (nameAlert.style.display = "block");
  } else {
    return (nameAlert.style.display = "none");
  }
};

theName.addEventListener("input", faultyName);

const faultyPsw = () => {
  if (password.test(psw.value) === false) {
    return (pswAlert.style.display = "block");
  } else {
    return (pswAlert.style.display = "none");
  }
};

psw.addEventListener("input", faultyPsw);

const faultyPswVerif = () => {
  if (psw.value === pswVerif.value) {
    return (pswVerifAlert.style.display = "none");
  } else {
    return (pswVerifAlert.style.display = "block");
  }
};

pswVerif.addEventListener("input", faultyPswVerif);

const faultyPhone = () => {
  if (phone.value.length < 10) {
    return (phoneAlert.style.display = "block");
  } else if (phone.value.length > 10) {
    return (phoneAlert.style.display = "none");
  }
};

phone.addEventListener("input", faultyPhone);

submitBtn.addEventListener("click", function (e) {
  if (userCheck.test(username.value) === false) {
    e.preventDefault() + alert("User invalid!");
  } else if (phone.value.length < 10) {
    e.preventDefault() + alert("Număr de telefon invalid!");
  } else if (nameCheck.test(theName.value) === false) {
    e.preventDefault() + alert("Nume invalid!");
  } else if (emailFormat.test(email.value) === false) {
    e.preventDefault() + alert("Email invalid!");
  } else if (password.test(psw.value) === false) {
    e.preventDefault() + alert("Parolă invalidă!");
  } else if (psw.value !== pswVerif.value) {
    e.preventDefault() + alert("Parole diferite!");
  } else if (checkbox.checked == false) {
    e.preventDefault() + alert("Nu ai acceptat termenii și condițiile!");
  }
});
