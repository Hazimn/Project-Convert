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
const result = document.getElementById("result")

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
        // Exibindo a cotação da moeda selecionada.
        description.textContent = `${symbol} 1= ${formatCurrencyBRL(price)}`

        // calcula o total
        let total = amount * price

        // Exibe o resultado total.
        result.textContent = total
        // Aplica a classe que exibe o footer para mostrar o resultado.
        footer.classList.add("show-result")
    } catch (error) {
        // remove a classe do footer ocultando ele da tela.
        footer.classList.remove("show-result")
        console.log(error)
        alert("Não foi possível converter. tente novamente mais tarde.")
    }

}
// Função para formatar valores em Real Brasileiro
function formatCurrencyBRL(value) {
    // Converte para número para utilizar o "toLocaleString"" para formatar no padrão BRL.
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}