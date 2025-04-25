// Cotação de moedas do dia.
const USD = 5.67
const EUR = 6.45
const GBP = 7.56

// Obtendo os elementos
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// Manipulando o input amount para receber somente Números.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})
// Captando o evento de submit (enviar) do formulário.
form.onsubmit = (Event) => {
    Event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}
// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1= ${price}`
        // Aplica a classe que exibe o footer para mostrar o resultado.
        footer.classList.add("show-result")
    } catch (error) {
        // remove a classe do footer ocultando ele da tela.
        footer.classList.remove("show-result")
        console.log(error)
        alert("Não foi possível converter. tente novamente mais tarde.")
    }

}