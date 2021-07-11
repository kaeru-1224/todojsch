const imegs=["01.jpg","02.jpg","03.jpg"];

const chosenImg= imegs[Math.floor(Math.random()*imegs.length)];

const bgImage= document.createElement("img")

bgImage.src =`img/${chosenImg}`




document.body.appendChild(bgImage)