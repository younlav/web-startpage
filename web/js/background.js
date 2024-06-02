const images = [
    //파일명이랑 같도록 작성
    "2.jpg",
    "3.png",
    "4.jpeg",

    "5.jpg",
    "6.jpg",
    "7.jpg",

    "8.jpg",
    "9.jpg",

    "10.jpg",
    "11.jpg",
];

// const month = parseInt(Date.prototype.getMonth());

const chosenImage = images[Math.floor(Math.random() * images.length)];

//<img src="img/0.jpg">
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
console.log(bgImage);

//body
document.body.appendChild(bgImage);
