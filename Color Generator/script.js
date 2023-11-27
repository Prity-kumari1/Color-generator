let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    let h2 = document.querySelector('h2');
    h2.innerHTML = getRandomColor();

    let div = document.querySelector('.color-box');
    div.style.backgroundColor = getRandomColor()
});
function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}
console.log(getRandomColor());