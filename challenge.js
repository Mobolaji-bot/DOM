const giftBox = document.getElementById("gift-box");
console.log(giftBox);

const button = document.getElementById("click-btn");
console.log(button);

button.addEventListener('click',() =>{
    console.log("clicked");
     giftBox.classList.toggle("hide")
    // giftBox.style.display ="block"
})

