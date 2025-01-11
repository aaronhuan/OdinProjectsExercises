const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
  return arr.reduce((total, num) =>{
    return total + num;
  },0 )
};

const multiply = function(arr) {
  return arr.reduce((total, num) => {
    return total * num;
  },1);
};

const power = function(base, exp) {
  return base ** exp;
};

const factorial = function(num) {
  let track=1;
	if (num==0){
    return 1;
  } else if(num==1){
    return 1;
  } else{
    for(let i=num; i>0; i--){
      track *=i;
    }
  }
  return track 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
