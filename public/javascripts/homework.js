var finished = document.querySelector(".finished");
var unCompleted = document.querySelector(".unCompleted");
var patch = document.querySelector(".patch");
var selfContent = document.querySelector(".self_content");

function addClick(dom,dom1,dom2,val1,val2){
    dom.addEventListener("click",function() {
        dom1.style.left = val1;
        dom2.style.left = val2;
        console.log(123);
    })
}

addClick(finished,patch,selfContent,"43vw","-65vw");
addClick(unCompleted,patch,selfContent,"11vw","0");
