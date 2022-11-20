const quoteTag = document.querySelector('h1')
const authorTag = document.querySelector('p')
const bodyTag = document.querySelector('body')
const getQuoteButton = document.querySelector('footer img')
const url = "https://api.superhi.com/api/test/quotes/random"

// let quotesData = []

// fetch("quotes.JSON").then(response=>response.json()).then(data=>{
//     quotesData = data
    
// })



function getQuote(){

fetch(url)
.then(response=> response.json())
.then(jsonData=> {

    quoteTag.innerHTML = `&ldquo; ${jsonData.quote} &rdquo;`
    authorTag.innerHTML = `&mdash; ${jsonData.author}`

    if(jsonData.quote.length> 100){
        quoteTag.classList.add('long')
    }
    else{
        quoteTag.classList.remove('long')
    }
    bodyTag.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 90%)`
})

    // const randomNo = Math.floor(Math.random() * 3) 
    // const randomQuote = quotesData[randomNo]
    // quoteTag.innerHTML = randomQuote.quote
    // authorTag.innerHTML = randomQuote.author
}
window.setTimeout(getQuote, 2000)

getQuoteButton.addEventListener('click', getQuote)