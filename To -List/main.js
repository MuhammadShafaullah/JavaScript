const ary = [];


const save=document.getElementById("save");
const data=document.getElementById("data");
const result=document.getElementById("result");


save.addEventListener("click",function(){

     
    ary.push(data.value)
    alert("Data Saved!")
    data.value=''
    let html = "";

ary.forEach(function(ary){
 html += ` <div class=""> ${ary}
              
 </div>  `
   
    
})
result.innerHTML=html
    
})







