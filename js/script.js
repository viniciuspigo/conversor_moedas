const btnSubmit = document.querySelector("#btn-submit");

function pegarMoeda() {
    const coinType = document.querySelector("#coin-type").value

    fetch(`https://economia.awesomeapi.com.br/last/${coinType}`)
    .then((res) => res.json())
    .then((data) => {
      resultado(data, coinType)
      console.log(data, coinType)
    });
}

function resultado(data, coinType) {
    const spanError = document.querySelector(".error")
    const formResult = document.querySelector(".form-result")
    const convert = document.querySelector("#convert")
    const result = document.querySelector("#result")
    const coinValue = document.querySelector("#coin-value").value

    const key = coinType.replace("-", "")
    const bid = data[key].bid
    const bitFormatado = parseFloat(bid).toFixed(2)
    const code = data[key].code
    const convertResult = parseFloat((coinValue * bid)).toFixed(2).replace(".", ",")

    if (coinValue > 0) {
        spanError.style.display = "none"
        formResult.style.display = "flex"
        convert.innerHTML = `${code}$ 1 = R$ ${bitFormatado}`
        result.innerHTML = `${convertResult} Reais`
    } else {
        spanError.style.display = "block"
        formResult.style.display = "none"
    }
}

btnSubmit.addEventListener("click", pegarMoeda);