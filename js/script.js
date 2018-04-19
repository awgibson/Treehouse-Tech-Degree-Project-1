var randomQuote;
var lastQuote = '';
var buildQuote;
var quoteBox = document.getElementById('quote-box');
var rgb;

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Random number function I can call in other functions to make the code a little neater
function randNum(low, high) {
    return Math.floor(Math.random() * high) + low;
}

function randRGB() {
    rgb = 'rgb(' + randNum(0, 255) + ',' + randNum(0, 255) + ',' + randNum(0, 255) + ')';
    document.body.style.backgroundColor = rgb;
}

function getRandomQuote() {
    return quotes[randNum(0, quotes.length)];
}

//Added a while loop that checks if the last quote displayed matches the previous quote. A new quote is generated until it does not match.
function printQuote() {
    randomQuote = getRandomQuote();
    console.log(randomQuote.quote);
    while (randomQuote === lastQuote) {
        randomQuote = getRandomQuote();
        console.log('Getting new quote');
    }
    lastQuote = randomQuote;
    buildQuote = '';
    buildQuote += '<p class="quote">' + randomQuote.quote + '</p>';
    buildQuote += '<p class="source">' + randomQuote.source;
    if (randomQuote.citation) {
        buildQuote += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    if (randomQuote.year) {
        buildQuote += '<span class="year">' + randomQuote.year + '</span>';
    }
    quoteBox.innerHTML = buildQuote;
    randRGB();
    console.log(randomQuote.quote);

}

