import NumberWork from "./numberWork.js";
import FormControl from "./FormControl.js";

const formControll = document.querySelector("#myForm");
const errorMessage = document.querySelector("#output");


formControll.onsubmit = (event) => {
  event.preventDefault();

  const inputElement = document.querySelector("input[name='number']");
  let inputValue = inputElement.value.trim();

  const isANumber = !isNaN(inputValue) && inputValue !== '';

  if (!isANumber) {
    
    errorMessage.classList.remove("d-none");
  } else {
   
    errorMessage.classList.add("d-none");
    
    alert(`The number is ${inputValue}`)
    const number = parseFloat(inputValue);
    console.log("Valid number:", number);
    console.log(`The email is valid`)
   
  }
};