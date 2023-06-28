//Random Generator quote function with array
function generateRandomQuote(){
    const quotes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.-Nelson Mandela",
        "The way to get started is to quit talking and begin doing. -Walt Disney",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking. \n-Steve Jobs",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron"
    ];
//Algo to get a random item from the array
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber];
    return randomQuote;
}
//Grabs the element changes the html element
let quoteContainer = document.getElementById("quote-container");
quoteContainer.innerHTML = generateRandomQuote();

//Generates the random quote when you refresh the page
window.addEventListener("load", function() {
    quoteContainer.innerHTML = generateRandomQuote();
  });