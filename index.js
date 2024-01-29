

const getColor =() =>{
    // const body = document.querySelector("body");
    let r = Math.floor (Math.random()*255);
    let g = Math.floor (Math.random()*255);
    let b = Math.floor (Math.random()*255);
    const h2 = document.querySelector("#randomColor")


    const color = `rgb(${r}, ${g}, ${b})`

    document.body.style.background = color;
    h2.innerHTML = color
}

setInterval(() => {
    getColor();
}, 1000);