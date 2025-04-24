const amount = document.getElementById("amount")

//Manipulando o input amount para receber somente Números.

amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})