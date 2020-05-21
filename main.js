const btnAdd = document.querySelector('#add')
const inputCosto = document.querySelector('#total')
const table = document.querySelector('tbody')
const tbPrestazione = document.querySelector('#prestazione')
const tbCicp = document.querySelector('#cicp')
const tbIva = document.querySelector('#iva')
const tbRitenutaAcconto = document.querySelector('#rit-acconto')
const totalePagare = document.querySelector('#totale-pagare')

let counterPrestazioni = 0;

const addNewElement = () => {
    counterPrestazioni += parseInt(inputCosto.value)
    
    tbPrestazione.innerText = counterPrestazioni.toFixed(2)
    let cicp = calcoloCicp(counterPrestazioni)
    tbCicp.innerText = cicp.toFixed(2)
    let iva = calcoloIva(counterPrestazioni, cicp)
    tbIva.innerText = iva.toFixed(2)
    let ritenutaAcconto = calcoloRitenuta(counterPrestazioni, cicp)
    tbRitenutaAcconto.innerText = ritenutaAcconto.toFixed(2)
    totalePagare.innerText = calcoloTotalePagare(counterPrestazioni, cicp, iva, ritenutaAcconto).toFixed(2)
}

const calcoloCicp = value => value * 0.04

const calcoloIva = (value, cicp) => (value + cicp) * 0.22

const calcoloRitenuta = (value, cicp) => (value + cicp) * 0.20

const calcoloTotalePagare = (counterPrestazioni, cicp, iva, ritenutaAcconto) => {
    return (counterPrestazioni + cicp + (iva - ritenutaAcconto))
}

btnAdd.addEventListener('click', addNewElement)