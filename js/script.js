var randomQuote;
var lastQuote = '';
var buildQuote;
var quoteBox = document.getElementById('quote-box');
var rgb;
var autoQuote;

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//Random number function I can call in other functions to make the code a little neater
function randNum(low, high) {
    return Math.floor(Math.random() * high) + low;
}

//Generates a random numbers from 0 to 255 using the randNum function and changes the body background to the generated string.
function randRGB() {
    rgb = 'rgb(' + randNum(0, 255) + ',' + randNum(0, 255) + ',' + randNum(0, 255) + ')';
    document.body.style.backgroundColor = rgb;
}

function getRandomQuote() {
    return quotes[randNum(0, quotes.length)];
}

function printQuote() {

    //When the function runs, the interval is cleared for the autoQuote and then reset for 30 seconds.
    clearInterval(autoQuote);
    autoQuote = setInterval(function () { printQuote(); }, 30000);

    randomQuote = getRandomQuote();

    //If the same quote is used twice in a row, this loop will run until it finds different quote.
    while (randomQuote === lastQuote) {
        randomQuote = getRandomQuote();
        console.log('Duplicate quote! Generating a new quote!');
    }

    //Build the displayed text for the quote
    buildQuote = '';
    buildQuote += '<p class="quote">' + randomQuote.quote + '</p>';
    buildQuote += '<p class="source">' + randomQuote.source;
    if (randomQuote.citation) {
        buildQuote += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    if (randomQuote.year) {
        buildQuote += '<span class="year">' + randomQuote.year + '</span>';
    }

    // Display quote, call the random background color function, set the lastQuote variable 
    //equal to the current randomQuote to compare the next time the function is called
    quoteBox.innerHTML = buildQuote;
    randRGB();
    lastQuote = randomQuote;
}

//call printQuote as soon as page loads
printQuote();
