const btn = document.querySelector("button");
const body = document.body;
const colorText = document.querySelector("h1 span");
console.log(colorText);

btn.addEventListener("click", () => {
    const randomColor = randomColorGenerator();
    console.log(randomColor);

    body.style.backgroundColor = randomColor;
    colorText.textContent = randomColor
});

function randomColorGenerator(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const randomColor = `rgb(${r},${g},${b})`;
    return randomColor;
};