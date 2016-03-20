
var red = document.querySelector(".rButton");
var blue = document.querySelector(".bButton");
var green = document.querySelector(".gButton");
var rDisplay = document.querySelector(".rdata");
var gDisplay = document.querySelector(".gdata");
var bDisplay = document.querySelector(".bdata");

red.addEventListener("click", function(){
    rDisplay.style.display == 'block';
});

blue.addEventListener("click", function(){
    bDisplay.style.display = 'block';
});

green.addEventListener("click", function(){
    gDisplay.style.display = "block";
});




// function showTab(){
// if (red === "click"){
//   rDisplay.style.display == 'block';
//   console.log("red");
// } else if 
//   (blue == true){
    
//     console.log("blue");
//   }else {
    
//     console.log("green");
//   }
// };


       