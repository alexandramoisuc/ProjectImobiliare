function show() {
  let input = document.getElementById("psw");
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}
const submit = document.getElementById("btn");

const email = document.getElementById("mail");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

const emailAlert = document.createElement("p");
emailAlert.textContent = "Inserează o adresă de e-mail corectă!";
document.getElementById("fault1").prepend(emailAlert);
emailAlert.classList.add("faulty");

const psw = document.getElementById("psw");
const password =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&./])[A-Za-z\d@$!%*?&./]{8,}$/;

const pswAlert = document.createElement("p");
pswAlert.textContent = "Inserează o parolă corectă!";
document.getElementById("fault2").prepend(pswAlert);
pswAlert.classList.add("faulty");

const faultyEmail = () => {
  if (emailFormat.test(email.value) === false) {
    return (emailAlert.style.display = "block");
  } else {
    return (emailAlert.style.display = "none");
  }
};

email.addEventListener("input", faultyEmail);

const faultyPsw = () => {
  if (password.test(psw.value) === false) {
    return (pswAlert.style.display = "block");
  } else {
    return (pswAlert.style.display = "none");
  }
};

psw.addEventListener("input", faultyPsw);

submit.addEventListener("click", function (e) {
  if (emailFormat.test(email.value) === false) {
    e.preventDefault() + alert("Nu ai completat toate câmpurile.");
  } else if (password.test(psw.value) === false) {
    e.preventDefault() + alert("Nu ai completat toate câmpurile.");
  }
});
