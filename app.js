import FormControl from "./FormControl.js";

const form = document.querySelector("#myForm");
const numberInput = document.querySelector("#number");
const emailInput = document.querySelector("#email");
const output = document.querySelector("#output");
const byeMessage = document.querySelector("#byeMessage");

const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");


yesBtn.addEventListener("click", () => {
  form.classList.remove("d-none");
  byeMessage.classList.add("d-none");
});


noBtn.addEventListener("click", () => {
  form.classList.add("d-none");
  byeMessage.classList.remove("d-none");
});


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numEmailChecker = new FormControl(numberInput.value, emailInput.value);

  if (!numEmailChecker.isValid()) {
    output.textContent = "Please enter a valid number and email.";
    output.classList.remove("d-none");
  } else {
    output.classList.add("d-none");
    alert(
      `Success!\nNumber: ${numEmailChecker.num}\nEmail: ${numEmailChecker.email}`
    );
  }
});
