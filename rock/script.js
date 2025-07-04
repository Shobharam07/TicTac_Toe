// console.log(Math.floor(Math.random()*2))

const button=document.querySelector("button");
const arr=['rock','paper']
button.addEventListener("click",()=>{
   const winner=Math.floor(Math.random()*2)
   if(arr[winner]==="rock"){
    const wi=document.getElementById("winner")
    wi.innerHTML="player 1 is winner"
   }else{
    const wi=document.getElementById("winner")
    wi.innerHTML="player 2 is winner"
   }
   
})