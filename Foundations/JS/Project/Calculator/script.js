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
const ref_bd= document.querySelector("body"); //get reference to body
const cal = document.createElement("div"); // created a div where calculator would live
cal.setAttribute("id", "calculator")
ref_bd.appendChild(cal); //add the div into body

for(let i=0; i<10; i++){ //create buttons for 0->9
    let cur_btn = document.createElement("button");
    cur_btn.setAttribute("id",`${i} btn`);
    cur_btn.textContent=i;
    cal.appendChild(cur_btn);
}

//create buttons for operators
const add_ref = document.createElement("button");
add_ref.textContent= "+";

const sub_ref = document.createElement("button");
sub_ref.textContent= "-";

const div_ref = document.createElement("button");
div_ref.textContent= "/";

const mul_ref = document.createElement("button");
mul_ref.textContent= "*";

cal.appendChild(add_ref);
cal.appendChild(sub_ref);
cal.appendChild(mul_ref);
cal.appendChild(div_ref);

//misc buttons
const dec_ref = document.createElement("button");
dec_ref.textContent=".";
const cle_ref = document.createElement("button");
cle_ref.textContent="clear";
const bac_ref = document.createElement("button");
bac_ref.textContent="del";

cal.appendChild(dec_ref);
cal.appendChild(cle_ref);
cal.appendChild(bac_ref);
