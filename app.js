import NumberWork from "./numberWork.js";
import FormControl from "./FormControl.js";

let x = 5
const myNumber = new NumberWork(x);
myNumber.displayNumber();
myNumber.posOrneg();


const formController = new FormControl();
formController.submitHandler();


