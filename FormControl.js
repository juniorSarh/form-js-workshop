export default class FormControl {
  constructor(num, email) {
    this.num = num;
    this.email = email;
  }

  #validNumber() {
    if (this.num === "") return false;
    return !isNaN(Number(this.num));
  }

  #validEmail() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }

  isValid() {
    return this.#validNumber() && this.#validEmail();
  }
}
