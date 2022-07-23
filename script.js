 let form = document.getElementById('form');

let inpName = document.getElementById('inpName');
let inpAge= document.getElementById('inpAge');
let inpColor = document.getElementById('inpColor');
let inpCountry = document.getElementById('inpCountry');
let sex = document.getElementsByClassName('sex');


let smubitBtn = document.getElementById('smubitBtn');

let cradDiv = document.getElementById('cradDiv');



 

smubitBtn.onclick = function(){

  let div = document.createElement('div');

   
    
    if(inpAge.value>0&&inpName.value.length>0&&inpCountry.value.length>0){
        div.innerHTML += 
      `<div  class="card" style="width: 18rem;">
    <div class="card-header">
      Featured
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">`+inpName.value+`</li>
    <li class="list-group-item">`+inpAge.value+`</li>
    <li class="list-group-item">`+inpColor.value+`</li>
    </ul>
  </div>`
    }
    
    
    cradDiv.appendChild(div)

    div.style.backgroundColor = inpColor.value


    inpAge.value= "";
    inpColor.value= "";
    inpName.value= "";
     


}
 
/* 
console.log(test); */
/* let cradDiv = document.getElementById('cradDiv');

let inpColor = document.getElementById('inpColor');

let smubitBtn = document.getElementById('smubitBtn');




smubitBtn.onclick = function(){

  let h1= document.createElement('h1');
  cradDiv.appendChild(h1)
  h1.style.backgroundColor = inpColor.value;
  h1.innerHTML += "heelo wolrd"

  h1.value= "";
  inpColor.value =""
    
} */