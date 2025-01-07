
const container = document.querySelector(".container")
for(let i=0; i<(16*16); i++){ 
    let boxes= document.createElement("div");
    boxes.setAttribute("class", "sketching_divs")
    container.appendChild(boxes);
}

const all_boxes = document.querySelectorAll(".sketching_divs")
all_boxes.forEach((div_box) => {
    div_box.addEventListener("mouseover", () => {
        div_box.classList.add("sketch");
    })    
});
