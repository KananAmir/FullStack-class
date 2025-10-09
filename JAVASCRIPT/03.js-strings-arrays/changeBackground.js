const changeBackgroundBtn = document.getElementById("changeBackgroundBtn");

changeBackgroundBtn.addEventListener("click", ()=>{
   const red = Math.floor(Math.random() * 256);
   const green = Math.floor(Math.random() * 256);
   const blue = Math.floor(Math.random() * 256);

//    console.log(`rgb(${red}, ${green}, ${blue})`);
   
   document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})