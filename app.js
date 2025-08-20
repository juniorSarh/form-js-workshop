import FormControl from "./FormControl.js";


const nameSection = document.querySelector("#nameSection");
const greetLine = document.querySelector("#greetLine");
const nameInput = document.getElementById("firstname");
const saveBtn = document.getElementById("saveBtn");
const askForm = document.querySelector("#askForm");

// Prefill & greet if name exists
const savedName = localStorage.getItem("firstname");
if (savedName) {
  nameInput.value = savedName;
  greetLine.textContent = `Hello, ${savedName}`;
  askForm.classList.remove("d-none"); 
  nameSection.classList.add("d-none"); 
}
else{
  alert('No username Found on the system')
}
console.log('passed the condition')
// Save name & update greeting
saveBtn.addEventListener("click", () => {
  const name = (nameInput.value || "").trim();
  if (!name) {
    alert("Please enter your name.");
    return;
  }
  else{
  localStorage.setItem("firstname", name);
  greetLine.textContent = `Hello, ${name}`;
  askForm.classList.remove("d-none"); 
  nameSection.classList.add("d-none"); 
}
});

// ===== Yes/No controls =====
const section = document.querySelector("#formSection");
const byeMessage = document.querySelector("#byeMessage");
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");

yesBtn.addEventListener("click", () => {
  section.classList.remove("d-none"); 
  byeMessage.classList.add("d-none"); 
});

noBtn.addEventListener("click", () => {
  section.classList.add("d-none"); 
  byeMessage.classList.remove("d-none"); 
});

// ===== Form handling =====
const form = document.querySelector("#userForm");
const numberInput = document.querySelector("#number");
const emailInput = document.querySelector("#email");
const output = document.querySelector("#output");
const displayBtn = document.querySelector("#displayBtn");

// Submit with validation
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const control = new FormControl(
    numberInput.value.trim(),
    emailInput.value.trim()
  );

  if (!control.isValid()) {
    output.textContent = "Please enter a valid number and email.";
    output.classList.remove("d-none");
    return;
  }

  output.classList.add("d-none");
  alert(`Success!\nNumber: ${control.num}\nEmail: ${control.email}`);
});

// Display current values (no validation)
displayBtn.addEventListener("click", () => {
  const num = numberInput.value.trim();
  const mail = emailInput.value.trim();
  output.textContent = `Number: ${num || "(empty)"} | Email: ${
    mail || "(empty)"
  }`;
  output.classList.remove("d-none");
});
