const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
const priceTag = document.querySelector('h1')
const spanTag = document.querySelector('span')
const currencyTag = document.querySelector('nav')
const currencies = Array.from(document.querySelectorAll('a'))


let currency = "USD"

function handleCurrency(event){

    currency = event.target.dataset.currency
    const element = event.target

    currencies.forEach(i =>{
        i.classList.remove('selected')
    })
    element.classList.add('selected')


    getCurrency()
 }


function getCurrency(event){
   
fetch(url)
.then(response => response.json())
.then(jsonData => {
    
     priceTag.innerHTML = jsonData.bpi[currency].rate_float.toFixed(1) 
     spanTag.innerHTML = currency
  
})
   
}

setTimeout(getCurrency, 2000)
currencyTag.addEventListener('click', handleCurrency)