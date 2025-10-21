const clickBtn = document.getElementById('clickBtn');
const box = document.querySelector('.box');
clickBtn.addEventListener("click", (e)=>{
    alert("Button Clicked!");
})

clickBtn.addEventListener("contextmenu", (e)=>{
    // e.preventDefault();
    console.log("contextmenu event");
    
})



box.addEventListener("mousedown", (e)=>{
    console.log("Mouse Down Event");
})

box.addEventListener("mouseup", (e)=>{
    console.log("Mouse Up Event");
})

box.addEventListener("mouseenter", (e)=>{
    e.target.style.backgroundColor = "lightblue";
})

box.addEventListener("mouseleave", (e)=>{
    e.target.style.backgroundColor = "lightgreen";
})

box.addEventListener("mousemove", (e)=>{
    console.log(`Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}`);
})


// keyboard events


const input = document.getElementById("inputField");

// input.addEventListener("keydown", (e)=>{
//     console.log(e)
// })

input.addEventListener("keyup", (e)=>{
    console.log(e.target.value);
    
})



input.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "teal";
    e.target.style.color = "white";
})

input.addEventListener("blur", (e)=>{
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
})