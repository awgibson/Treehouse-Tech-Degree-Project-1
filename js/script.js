//Define variables
var currentQuote;
var previousQuote = '';
var buildQuote;
var quoteBox = document.getElementById('quote-box');
var rgb;
var autoQuote;

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//Random number function to help keep code cleaner
function randNum(low, high) {
    return Math.floor(Math.random() * high) + low;
}

//Generates a random numbers from 0 to 255 using the randNum function and changes the body background to the generated string.
function randomBackground() {
    rgb = 'rgb(' + randNum(0, 255) + ',' + randNum(0, 255) + ',' + randNum(0, 255) + ')';
    document.body.style.backgroundColor = rgb;
}

function getRandomQuote() {
    // Picks a random quote
    currentQuote = quotes[randNum(0, quotes.length)];

    //Prevents a quote from being displayed twice in a row
    while (currentQuote === previousQuote) {
        currentQuote = getRandomQuote();
        console.log('Duplicate quote! Generating a new quote!');
    }
    return currentQuote;
}

function printQuote() {
    //When the function runs, the interval is cleared for the autoQuote and then set for 30 seconds.
    clearInterval(autoQuote);
    autoQuote = setInterval(function () { printQuote(); }, 30000);

    //Calls function and returns the currentQuote variable.
    getRandomQuote();

    //Build the displayed text for the quote with conditionals to add the citation, year, and tags (hidden) if present
    buildQuote = '';
    buildQuote += '<p class="quote">' + currentQuote.quote + '</p>';
    buildQuote += '<p class="source">' + currentQuote.source;
    if (currentQuote.citation) {
        buildQuote += '<span class="citation">' + currentQuote.citation + '</span>';
    }
    if (currentQuote.year) {
        buildQuote += '<span class="year">' + currentQuote.year + '</span>';
    }

    //Added a hidden span for the tags and a class attribute of tags that is currently not styled so the
    //tags may be added in and styled at a later point if desired
    if (currentQuote.tags) {
        buildQuote += '<span class="tags" style="visibility: hidden">' + currentQuote.tags.join(', ') + '</span>';
    }



    // Display quote, call the random background color function, set the previousQuote variable 
    //equal to the currentQuote to compare the next time the function is called
    quoteBox.innerHTML = buildQuote;
    randomBackground();
    previousQuote = currentQuote;
}

//call printQuote as soon as page loads
printQuote();
