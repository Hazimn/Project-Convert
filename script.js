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
    console.log(currency.value)
}