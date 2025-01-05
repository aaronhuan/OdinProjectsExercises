const fibonacci = function(num) {
    if (num<0){
        return "OOPS"
    }
    if (num==0){
        return 0;
    } else if (num==1){
        return 1;
    }else if (num==2){
        return 1;
    } else{
        return fibonacci(num-1) + fibonacci(num-2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
