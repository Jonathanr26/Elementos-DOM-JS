var inpNum1 = document.querySelector('#numero1')
var inpNum2 = document.querySelector('#numero2')
var inpRes = document.querySelector('#resultado')
var btnSumar = document.querySelector('#btnSumar')
var btnRestar = document.querySelector('#btnRestar')
var btnMultiplicar = document.querySelector('#btnMultiplicar')
var btnDividir = document.querySelector('#btnDividir')
var btnBorrar = document.querySelector('#btnBorrar')
var btnProbar = document.querySelector('#btnProbar')

btnProbar.addEventListener('click', () => {
    let num = Number(inpNum1.value)

    if (num < 10){
        inpRes.value = 'Unidades'
    }
    else if (num < 100) {
        inpRes.value ='Decenas'
    }
    else if (num < 1000) {
        inpRes.value ='Centenas'
    }
    else if (num < 10000) {
        inpRes.value ='Millar'
    }
    else {
        inpRes.value ='Fuera de rango'
    }
})

btnSumar.addEventListener('click', () => {
    let num = Number(inpNum1.value) 
    let num2 =Number(inpNum2.value)
    //la variable let es local y se usa dentro de corchetes, para que no se afecte a lo de afuera.
    inpRes.value = num + num2
})

btnRestar.addEventListener('click', () => {
    let num = Number(inpNum1.value) 
    let num2 =Number(inpNum2.value)
    inpRes.value = num - num2
})

btnMultiplicar.addEventListener('click', () => {
    let num = Number(inpNum1.value) 
    let num2 =Number(inpNum2.value)
    inpRes.value = num * num2
})

btnDividir.addEventListener('click', () => {
    let num = Number(inpNum1.value) 
    let num2 =Number(inpNum2.value)
    inpRes.value = num / num2
})

btnBorrar.addEventListener('click', () => {
    inpNum1.value = '' 
    inpNum2.value = ''
    inpRes.value = ''
})