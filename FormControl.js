export default class FormControl {
  constructor(num, email) {
    this.num = num;
    this.email = email;
    this.getName();
  }

  isNumberValid() {
    return this.num !== "" && !isNaN(this.num);
  }

  isEmailValid() {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(this.email);
  }

  isValid() {
    return this.isNumberValid() && this.isEmailValid();
  }

 getName() {
    let name = "Sabelo";
    localStorage.setItem("firstmane",name);
  }
}
