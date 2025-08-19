export default 
class FormControl {
    constructor(num1, email) {
        this.num1 = num1;
        this.email = email;
    }

    submitHandler() {
        if (this.checkIsNumber(this.num1) || !this.isEmailValid(this.email)) {
            alert("Error: Invalid number or email.");
            return false;
        } else {
            alert(`Success: number is ${this.num1}, email is ${this.email}`);
            return true;
        }
    }

    checkIsNumber(number) {
        return isNaN(number) || number === '';
    }

    isEmailValid(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
}