const quantity = document.getElementById("quantity")
const interval1 = document.getElementById("interval-1")
const interval2 = document.getElementById("interval-2")
const form = document.querySelector("form")
const divSortear = document.querySelector(".sorteio")
const divResultSorteio = document.querySelector(".result-sorteio")
const quantitySorteio = document.getElementById("quantity-result")
const buttonSortearNovamente = document.querySelector(".sorteio-novamente")
const results = document.querySelector("ul")
const notRepeatNumber = document.getElementById("check")


let countSorteio = 0

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const numbers = SortearNumeros(quantity.value, interval1.value, interval2.value)
    
    const li = document.createElement("li")
    for(let i = 0; i < numbers.length - 1; i++) {
        li.textContent = numbers[i]
    }
    
    if(quantity.value === "" || interval1 === "" || interval2 === "") {
        alert("Erro! Não foi possível sortear.")
    }
    else {
        results.append(li)
        divResultSorteio.classList.remove("none")
        divSortear.classList.add("none")
        countSorteio++
        quantitySorteio.textContent = `${countSorteio}° resultado`
    }

})

buttonSortearNovamente.addEventListener("click", () => {
    divResultSorteio.classList.add("none")
    divSortear.classList.remove("none")
})

function SortearNumeros(quantity, min, max) {
    const numerosSorteados = []

    for(let i = 0; i < quantity; i++) {
        const numero = Math.floor(Math.random() * (max - min + 1)) + min
        numerosSorteados.push(numero)
    }

    return numerosSorteados;
}