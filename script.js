var keys=document.querySelectorAll(".keyboard__key")

for(i=0;i<keys.length;i++){
  keys[i].setAttribute("id",keys[i].innerText)
}
document.getElementById("data").addEventListener("keyup",(event)=>{
  var ele=event.key
  
  console.log(ele)
  console.log(document.getElementById(ele))
  document.getElementById(ele).classList.add("currentkey")
  var second=document.getElementById(ele)
  remove(second)
})
function remove(){
  var agrs=Array.from(arguments)
  setTimeout(()=>{
  agrs[0].classList.remove("currentkey")
  },1000)
}