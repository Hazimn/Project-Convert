// Cotação de moedas do dia.
const USD = 5.67
const EUR = 6.45
const GBP = 7.56
// Obtendo os elementos

const form = document.querySelector("form")

const amount = document.getElementById("amount")

const currency = document.getElementById("currency")

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
            convertCurrency(amount.value, USD, "US$" )
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
    console.log(amount, price, symbol)

}