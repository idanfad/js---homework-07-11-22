
let numbers = [];
function getUserNumbers() {
    for (i = 0; i < 10; i++) {
        numbers.push(prompt("Please Enter a Number"));
        
    }   console.log(numbers);
  }  
  numbers.forEach(getUserNumbers);
 


getUserNumbers();