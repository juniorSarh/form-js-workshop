export default
class NumberWork {
  constructor(num1) {
    this.num1 = num1;
  }

  displayNumber() {
    console.log(`This is number ${this.num1}`);
  }
  posOrneg(){
     if (this.num1 < 0) {
    console.log('The number is negative');
     }
     else{
        console.log('The number is positive');
     }
    
    }
}
