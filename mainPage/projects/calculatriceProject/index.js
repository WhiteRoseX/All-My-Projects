const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result")

console.log(buttons);


buttons.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        console.log(e.target.id);
        result.textContent += e.target.id;
    })
});

equal.addEventListener("click", () => {
    result.textContent = eval(result.textContent)
})

reset.addEventListener("click", () => {
    result.textContent = "";
})