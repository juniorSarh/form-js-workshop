import NumberWork from "./numberWork.js";

export default class FormControl {
  constructor() {
    this.form = document.getElementById('myForm');
  }

  submitHandler() {
    this.form.onsubmit = (event) => {
      event.preventDefault(); 

      const input = document.getElementById('number').value;
      const num = parseFloat(input);

      if (isNaN(num)) {
        alert("Please enter a valid number.");
        return;
      }

      const numberInstance = new NumberWork(num);
      numberInstance.displayNumber();
      const sign = numberInstance.posOrneg();

      document.getElementById('result').innerHTML = `
        <p>Number: ${num}</p>
             `;
    };
  }
}