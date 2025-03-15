//creat a function

const textbox = document.getElementById("texbox");
const tofahrenhiet = document.getElementById("tofahrenhiet");
const toCelsuis = document.getElementById("toCelsuis");
const result = document.getElementById("result");
let temp;

function convert(){
  if(tofahrenhiet.checked){
    temp = Number(textbox.value);
    temp = temp * 9 / 5 + 32
    result.textContent=temp.toFixed(1) + "℉";
    
    }else if (toCelsuis.checked){
    temp = Number(textbox.value);
    temp = (temp - 32) * (5/9); 
    result.textContent=temp.toFixed(1) + "℃";
    }
    else{
    result.textContent ="select a unit";
    
    }
}