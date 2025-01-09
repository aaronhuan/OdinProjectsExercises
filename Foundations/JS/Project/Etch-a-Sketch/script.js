
const container = document.querySelector(".container");

//add the creating Grid into a function
function createGrid(num){
    for(let i=0; i<(num*num); i++){ 
        let boxes= document.createElement("div");
        boxes.setAttribute("class", "sketching_divs");
        boxes.style.flexBasis= `calc(100% / ${num})`
        container.appendChild(boxes);
    }
    hover_effect();
}

function removeGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}

createGrid(16); //create the default grid when loading

const all_boxes = document.querySelectorAll(".sketching_divs");

// event listener for hovering over the boxes, which adds the class to the div
// which causes background to turn a color
//reuse the for each code to also remove the class  

function hover_effect(){
    const all_boxes = document.querySelectorAll(".sketching_divs");
    all_boxes.forEach((div_box) => {
        div_box.addEventListener("mouseover", () => {
            div_box.classList.add("sketch");
        });
    })}

hover_effect(true); //set this as default


// get DOM nodes for the form buttons
const reset_btn = document.querySelector(`input[type="reset"]`);
const submit_btn = document.querySelector(`input[type="submit"]`);
const num_input = document.querySelector("#nsqr");

submit_btn.disabled=true; //default disabled
num_input.addEventListener('input', ()=>{
    if (!num_input.value){
        submit_btn.disabled= true;
    } else{
        submit_btn.disabled= false;
    }  
})

submit_btn.addEventListener('click', function(event){
    event.preventDefault();
    removeGrid();
    createGrid(num_input.value);
});  


reset_btn.addEventListener('click', () =>{
    const all_boxes =document.querySelectorAll(".sketching_divs");
    all_boxes.forEach((div_box) => {
        div_box.classList.remove("sketch");
    })
})
