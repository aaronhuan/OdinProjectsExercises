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
let first_num=undefined;
let second_num=undefined;
let op=undefined;

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

const calculator = document.createElement("div"); //calculator as a whole 
calculator.setAttribute("id", "calculator")
container.appendChild(calculator);

const display = document.createElement("div"); //for displaying 
const display_digits = document.createElement("p"); //the text
display.setAttribute("id", "display");
display_digits.textContent="0";//default start 

const calcBody = document.createElement("div"); // created a div where calculator would live
calcBody.setAttribute("id", "calculatorBody");

calculator.appendChild(display);
display.appendChild(display_digits);
calculator.appendChild(calcBody); //add the div into body

//make these first so its on top 
const reds = document.createElement("div")
reds.setAttribute("id", "reds")
calcBody.appendChild(reds);
createRegBtns("AC");
createRegBtns("del");

const clear_btn = document.querySelector("#AC");
const del_btn = document.querySelector("#del");
clear_btn.setAttribute("class", "red-btns");
del_btn.setAttribute("class", "red-btns");// set delete and clear to diff class 
reds.appendChild(clear_btn);
reds.appendChild(del_btn);

const rest = document.createElement("div");
rest.setAttribute("id", "rest");
calcBody.appendChild(rest);


function createRegBtns(name){ //helper function in creating buttons
    let curOpBtn = document.createElement("button");
    curOpBtn.textContent= name;
    curOpBtn.setAttribute("id", name);
    curOpBtn.setAttribute("class","reg-btns")
    calcBody.appendChild(curOpBtn);
}


//create buttons for op and numbers 
createRegBtns(1);
createRegBtns(2);
createRegBtns(3);
createRegBtns("+");

createRegBtns(4);
createRegBtns(5);
createRegBtns(6);
createRegBtns("-");

createRegBtns(7);
createRegBtns(8);
createRegBtns(9);
createRegBtns("*");

createRegBtns(0);
createRegBtns(".");
createRegBtns("=");
createRegBtns("/");

let all_rest= document.querySelectorAll(".reg-btns");

all_rest.forEach(btn => {
    rest.appendChild(btn);
});

//after all buttons are made put it under rest of buttons div 


//make it work 
let current_input="0";

const all_btns = document.querySelectorAll("button");

all_btns.forEach((button) => {
    button.addEventListener("click", () =>{
        let button_num = Number(button.id);

        switch (true){
            case (button_num >=0 && button_num <= 9): //digits clicked 
                if (current_input === "0" || current_input== undefined){
                    current_input= button.id;
                }else{
                    current_input+= button.id;
                }

                if (first_num !== undefined && op !== undefined){
                    display_digits.textContent = first_num + " " + op + " " + current_input
                } else {
                    display_digits.textContent=current_input;
                }
                console.log(current_input);
                break;

            case (button.id==="."): //decimal
                current_input+= button.id
                display_digits.textContent=current_input
                break;

            case (button.id =="del"): //backspace / delete
                if (current_input===undefined){
                    if (op !== undefined){
                        current_input=first_num.toString(); //revert back to number
                        //change back to undefined
                        first_num=undefined; 
                        op=undefined;  
                    } else{
                    current_input = "0";
                    }
                } else{
                    if (current_input.length ==1 && op ==undefined){ //if just a digit then set it to 0
                    current_input= "0";
                    } else {
                        current_input= current_input.substring(0, current_input.length-1);
                    }
                }

                if (op!=undefined){
                    display_digits.textContent= first_num + " " + op + " " + current_input;
                } else{
                    display_digits.textContent=current_input; 
                }
                break;
            case (button.id =="AC"): //clear all
                current_input="0";
                first_num= undefined;
                op=undefined;
                display_digits.textContent=current_input;
                break;
            case (button.id== "+" || button.id == "-" || button.id == "/" || button.id == "*"): // op
                first_num= Number(current_input); //set first num as what is already there
                op= button.id; // set op to the symbol
                display_digits.textContent= current_input +" " + op;
                current_input= undefined; //set current_input to undefined and let user define it (better than setting it to 0)
                break 
            case (button.id == "="): //evaluate
                let result = "NaN"
                if (first_num !== undefined && op !== undefined){
                    second_num= Number(current_input);
                    result = (op == "+") ? add_op(first_num, second_num) :
                                 (op == "-") ? sub_op (first_num, second_num) : 
                                 (op == "*") ? mul_op (first_num, second_num) : 
                                 (op == "/") ? div_op (first_num, second_num) : 
                                 "NaN"
                    first_num= result;
                    current_input=result;
                    op = undefined;
                    second_num=undefined;
                } 
                console.log(result);
                display_digits.textContent = result;
                break
            default:
                console.log("button not between 0 and 9")
                break
        }
        
    });   
});