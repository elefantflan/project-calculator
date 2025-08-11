const add = function(a,b) {
    return a+b
  };
  
const subtract = function(a,b) {
    return a-b
  };
  
const multiply = function(array) {
    return array.reduce((item,currentValue)=> item*currentValue);
  };

const divide = function(a,b){
    return a/b;
}

const calculator = function(a, operator, b){
    return a + operator + b;
}

//screen
document.getElement('.screen')