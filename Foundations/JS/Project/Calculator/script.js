//step 1 basic math op
function add_op (num1, num2){
    return num1 + num2;
}

function sub_op(num1, num2){
    return num1 - num2;
}

function mul_op(num1, num2){
    return num1 * num2;
}

function div_op (num1,num2){
    return num1/num2;
}

//step 2 create 3 vars
let first_num;
let second_num;
let op;

//step 3 operate fun takes in 3 vars and calls one of the above fun
function operate(op, num1, num2){
    switch(op){
        case "+":
            return add_op(num1, num2);
        
        case "-":
            return sub_op(num1,num2);
        
        case "*":
            return mul_op(num1,num2);
        
        case "/":
            return div_op(num1,num2)
    }
}