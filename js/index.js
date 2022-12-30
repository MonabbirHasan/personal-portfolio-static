var persent1=document.querySelector(".persent1");
var persent2=document.querySelector(".persent2");
var persent3=document.querySelector(".persent3");
var persent4=document.querySelector(".persent4");
var persent5=document.querySelector(".persent5");
var persent6=document.querySelector(".persent6");
var persent7=document.querySelector(".persent7");
var persent8=document.querySelector(".persent8");
var persent10=document.querySelector(".persent10");
var persent11=document.querySelector(".persent11");
var persent12=document.querySelector(".persent12");
var persent13=document.querySelector(".persent13");
var count1=1;
var count2=1;
var count3=1;
var count4=1;
var count5=1;
var count6=1;
var count7=1;
var count8=1;
var count10=1;
var count11=1;
var count12=1;
var count13=1;
var interval1=setInterval(tim1,25);
var interval2=setInterval(tim2,25);
var interval3=setInterval(tim3,25);
var interval4=setInterval(tim4,25);
var interval5=setInterval(tim5,25);
var interval6=setInterval(tim6,25);
var interval7=setInterval(tim7,25);
var interval8=setInterval(tim8,25);
var interval10=setInterval(tim10,25);
var interval11=setInterval(tim11,25);
var interval12=setInterval(tim12,25);
var interval13=setInterval(tim13,25);
function tim10(){
persent10.innerHTML=count10+++'%';
if(count10===71){
clearInterval(interval10);
}
}
function tim11(){
persent11.innerHTML=count11+++'%';
if(count11===81){
clearInterval(interval11);
}
}
function tim12(){
persent12.innerHTML=count12+++'%';
if(count12===81){
clearInterval(interval12);
}
}
function tim13(){
persent13.innerHTML=count13+++'%';
if(count13===71){
clearInterval(interval13);
}
}
function tim1(){
persent1.innerHTML=count1+++'%';
if(count1===81){
clearInterval(interval1);
}
}
function tim2(){
persent2.innerHTML=count2+++'%';
if(count2===86){
clearInterval(interval2);
}
}
function tim3(){
persent3.innerHTML=count3+++'%';
if(count3===81){
clearInterval(interval3);
}
}
function tim4(){
persent4.innerHTML=count4+++'%';
if(count4===76){
clearInterval(interval4);
}
}
function tim5(){
persent5.innerHTML=count5+++'%';
if(count5===71){
clearInterval(interval5);
}
}
function tim6(){
persent6.innerHTML=count6+++'%';
if(count6===81){
clearInterval(interval6);
}
}
function tim7(){
persent7.innerHTML=count7+++'%';
if(count7===81){
clearInterval(interval7);
}
}
function tim8(){
persent8.innerHTML=count8+++'%';
if(count8===46){
clearInterval(interval8);
}
}
// persnt closed
var header=document.querySelector("header");
window.addEventListener("scroll",()=>{
header.classList.toggle("menu_active",window.scrollY>100);
})
// bubble efect
function efect(){
var count=300;
var i=0;
while(i<count){
var bubble=document.createElement("i");
var size=Math.random()*5;
var x=Math.floor(Math.random()*window.innerWidth);
var y=Math.floor(Math.random()*window.innerHeight)
bubble.style.left=x+'px';
bubble.style.top=y+'px';
bubble.style.width=2+size+'px';
bubble.style.height=2+size+'px';
document.querySelector(".banner").appendChild(bubble);
i++;
}
}
efect();
var navitem=document.querySelectorAll(".nav-item");
var marker=document.querySelector(".marker");
function indicator(e){
marker.style.width=e.offsetWidth+'px';
marker.style.left=e.offsetLeft+'px';
}
navitem.forEach(link => {
link.addEventListener("mousemove",(e)=>{
indicator(e.target);
})
});
var dev=document.querySelector(".dev-box");
var text=0;
var tran=['translateY(-0px)','translateY(-50px)','translateY(-105px)','translateY(-160px)'];
setInterval(() => {
text++;
console.log(text)
if(text>=tran.length){
text=0;
dev.style.transform=tran[text];
}else{
dev.style.transform=tran[text];
}
},5000);
// filter startehrer
var list=document.querySelectorAll(".list");
var itembox=document.querySelectorAll(".item-box");
for(var i =0;i<list.length;i++){
list[i].addEventListener("click",function(){
for(var j=0;j<list.length;j++){
  list[j].classList.remove("active");
  }
  this.classList.add("active");
  
  });
  }


//   context menu disabled

window.oncontextmenu=function(){
    return false;
}