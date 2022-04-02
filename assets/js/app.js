
function numberDecimal(num) {
    resultado = document.querySelector("#result")
    let decimal = parseInt(num) 
    var binario =  decimal.toString(2)
    resultado.textContent = binario

    if(num === ''){
            return resultado.textContent = ''
    }else if(num.length > 10){
            return resultado.textContent =  `Valor máximo atingido!`
    }
    
}
