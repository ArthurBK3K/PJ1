var quotes = [{
{
quote:"I will do whatever it takes to win games, whether it's sitting on a bench waving a towel, handing a cup of water to a teammate, or hitting the game winning shot.",
source:"-Kobe Bryant",
},
{
quote:"Basketball isn't just a sport. It's an art, one that must be mastered to succeed.",
source:"-Stephen Curry"
},
{
quote:"With everything I do, I just try to be myself.",
source:"Kevin Durant"
},
{
quote:"I need music. It's like my heatbeat, so to speak. It keeps me going no matter what's going on.",
source:"LeBron James",
citation:"247 Sports",
year:"2019"
}];
function bgColor(){
    var a = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var c = Math.floor(Math.random()*256);
    var bgColor = "rgb("+ a +","+ b +","+ c +")";
    document.body.style.background = bgColor;
}

 var holding= [];

function getRandomQuote(){
  if (quotes.length== 0){
    quotes= holding;
    holding=[];
  }
  var  randomNumber = Math.floor(Math.random()*(quotes.length));
  var quote = quotes[randomNumber];

  quotes.splice(randomNumber, 1);
  holding.push(quote);

}
// The printQuote function calls the quote.

function printQuote(){
  randomBgColor();
  var randomQuote= getRandomQuote();
  var htmlString ="";
    htmlString += '<p class="quote">' + randomQuote.quote +'</p>';
    htmlString += '<p class="source">' + randomQuote.source;'</p>';

    if (randomQuote.citation){
      htmlString+= '<span class="citation">' + randomQuote.citation + '</span>'
    }
    if(randomQuote.year){
      htmlString += '<span class="year">' + randomQuote.year + '</span>'
    }

document.getElementById('quote-box').innerHTML = htmlString;
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
};
