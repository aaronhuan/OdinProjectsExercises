const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
  let current = 0;
  for(let i =0; i<arr.length; i++){
    current = add(current,arr[i]);
  }
	return current;
};

const multiply = function(arr) {
  let current=1;
  for(let i =0; i< arr.length; i++){
    current *=arr[i]
  }
  return current;
};

const power = function(base, exp) {
  if (exp ==0){
    return 1;
  } else if(exp ==1){
    return base;
  } else{
    let track = base;
    let i =2;
    for(; i<=exp; i++){
      track *=base;
    } 
    return track;
  }
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
