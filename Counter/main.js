const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const displayValue = document.getElementById("displayValue");

const resetBtn = document.getElementById("resetBtn");

decrementBtn.addEventListener("click" , function(){
     const value = Number(displayValue.innerHTML);
     if(value > 0){
        displayValue.innerHTML = value - 1;
     }else{
        alert("Negative Num Not allow")
     }
});

incrementBtn.addEventListener("click" , function(){
    const value = Number(displayValue.innerHTML);
    if(value >= 10){
        alert("10+ vlaue are not allow");
    }else{
        displayValue.innerHTML = value + 1;
    }
});

resetBtn.addEventListener("click", function(){
   displayValue.innerHTML = 0;
});