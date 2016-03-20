
var red = document.querySelector(".rButton");
var blue = document.querySelector(".bButton");
var green = document.querySelector(".gButton");
var rDisplay = document.querySelector(".rdata");
var gDisplay = document.querySelector(".gdata");
var bDisplay = document.querySelector(".bdata");

red.addEventListener("click", function(){
    if(rDisplay.style.display = "none"){
      rDisplay.style.display = 'block';
      bDisplay.style.display = 'none';
      gDisplay.style.display = 'none';
    }
});

blue.addEventListener("click", function(){
    if(bDisplay.style.display = "none"){
      bDisplay.style.display = 'block';
      rDisplay.style.display = 'none';
      gDisplay.style.display = 'none';
  }
});

green.addEventListener("click", function(){
    if(gDisplay.style.display = "none"){
      gDisplay.style.display = 'block';
      bDisplay.style.display = 'none';
      rDisplay.style.display = 'none';
  }
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


       