// getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll

// getElementById

let head = document.getElementById("head");
head.innerText = "Welcome Back";
head.innerHTML = "<em>Welcome Back</em>";
head.style.color = "blue";
head.style.fontSize = "40px";


// getElementsByClassName

let fruits = document.getElementsByClassName("fruits");
console.log(fruits);

fruits[0].style.color="red";
fruits[1].style.color="yellow";
fruits[2].style.color="orange";
fruits[3].style.color="green";


// querySelector

let ele = document.querySelector("div");
console.log(ele);


// querySelectorAll

let eles = document.querySelectorAll("div");
console.log(eles);


// createElement, createTextNode, appendChild, removeChild, replaceChild

let h2Ele = document.createElement("h2");
h2Ele.innerText = "This is a new heading created using createElement";
console.log(h2Ele);

document.body.appendChild(h2Ele);
document.getElementById("new").appendChild(h2Ele);


function hideText() {
    head.style.display = "none";
}

function showText() {
    head.style.display = "block";
}

function toggle(){
    if(head.style.display === "none"){
        showText();
    }
    else{
        hideText();
    }
}

document.getElementById("hidebtn").addEventListener("click", hideText);
document.getElementById("hidebtn").addEventListener("mouseover", showText);
