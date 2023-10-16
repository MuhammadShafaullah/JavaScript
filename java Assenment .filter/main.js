let data=[{"id":1,"name":"Leonhard","gender":"Male","country":"Tanzania","age":13},
{"id":2,"name":"Amabelle","gender":"Female","country":"Russia","age":31},
{"id":3,"name":"Yvonne","gender":"Female","country":"Guatemala","age":36},
{"id":4,"name":"Neala","gender":"Genderqueer","country":"China","age":16},
{"id":5,"name":"Calvin","gender":"Male","country":"Egypt","age":50},
{"id":6,"name":"Sollie","gender":"Male","country":"Azerbaijan","age":36},
{"id":7,"name":"Alice","gender":"Female","country":"France","age":34},
{"id":8,"name":"Alfie","gender":"Male","country":"Belarus","age":50},
{"id":9,"name":"Brandon","gender":"Male","country":"Philippines","age":16},
{"id":10,"name":"Bernie","gender":"Male","country":"Indonesia","age":44},
{"id":11,"name":"Jervis","gender":"Male","country":"Philippines","age":24},
{"id":12,"name":"Marie-jeanne","gender":"Female","country":"Mexico","age":25},
{"id":13,"name":"Helga","gender":"Genderqueer","country":"France","age":25},
{"id":14,"name":"Gabriella","gender":"Female","country":"Burkina Faso","age":46},
{"id":15,"name":"Ainsley","gender":"Female","country":"Japan","age":20},
{"id":16,"name":"Lindsey","gender":"Polygender","country":"Malaysia","age":27},
{"id":17,"name":"Daryl","gender":"Female","country":"Indonesia","age":50},
{"id":18,"name":"Noll","gender":"Male","country":"Malaysia","age":16},
{"id":19,"name":"Aaren","gender":"Female","country":"Japan","age":17},
{"id":20,"name":"Olenolin","gender":"Genderqueer","country":"Panama","age":40}]

const male=[]
const female=[]
const China_stu=[]
const age_20=[]


const mfbtn = document.getElementById('mfbtn');
const result = document.getElementById('result');
const sg = document.getElementById('sg');
const box= document.getElementsByClassName("box")

mfbtn.addEventListener("click",function(){
  

    data.forEach( function(item,index)
    {
      if(item.gender == 'Male' )
      {
         male.push(item)
      }
      if(item.gender == 'Female' )
      {
         female.push(item) 
      }

      if(item.country == 'China' )
      {
         China_stu.push(item) 
      }
      if(item.age > '20' )
      {
         age_20.push(item) 
      }

    })
    console.log("Male" ,male)
    console.log("Female" ,female)
    console.log("China Students" , China_stu)
    console.log("Age > 20" ,age_20)   

})



sg.addEventListener("click",function(){
   let num = prompt("Please enter your num:");
   console.log(+num )
 
   let num2 = +num;
    
   let html=result.innerHTML
    

   for(let i=0; i<num2; i++){
      html +=`<div class="box"></div>`
      result.innerHTML=html
      
   }

   const rndInt = randomIntFromInterval(0, num2)

  
   box[rndInt].addEventListener("click",function(){
      alert("Hello")
      
    })

   
})


function randomIntFromInterval(min, max) { // min and max included 
   return Math.floor(Math.random() * (max - min + 1) + min)
 }

