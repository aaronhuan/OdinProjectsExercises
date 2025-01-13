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


//step 4 create basic calculator w/ buttons
const container = document.createElement("div"); // container for the calculator
document.body.appendChild(container);//add container to body
container.setAttribute("id", "container");

const display = document.createElement("div"); //for displaying 
const display_digits = document.createElement("p"); //the text
display.setAttribute("id", "display");
display_digits.textContent="0";//default start 

const calcbtns = document.createElement("div"); // created a div where calculator would live
calcbtns.setAttribute("id", "calculator");

container.appendChild(display);
display.appendChild(display_digits);
container.appendChild(calcbtns); //add the div into body


function createRegBtns(name){ //helper function in creating buttons
    let curOpBtn = document.createElement("button");
    curOpBtn.textContent= name;
    curOpBtn.setAttribute("id", name);
    curOpBtn.setAttribute("class","reg-btns")
    calcbtns.appendChild(curOpBtn);
}

for(let i=0; i<10; i++){ //create buttons for 0->9
    createRegBtns(`${i}`)
}

//create buttons for operators
createRegBtns("+");
createRegBtns("-");
createRegBtns("*");
createRegBtns("/");
createRegBtns(".");
createRegBtns("=");
createRegBtns("AC");
createRegBtns("del");

const clear_btn = document.querySelector("#AC");
const del_btn = document.querySelector("#del");
clear_btn.setAttribute("class", "red-btns");
del_btn.setAttribute("class", "red-btns");// set delete and clear to diff class 
