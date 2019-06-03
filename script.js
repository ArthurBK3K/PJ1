var quotes = [
  {
  quote:"You have to expect things from yoursef before you can do them.",
  source:"-Michael Jordan"  
  },
  {
  quote:"I will do whatever it takes to win games, whether it's sitting on a bench waving a towel, handing a cup of water to a teammate, or hitting the game winning shot.",
  source:"-Kobe Bryant"
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
  quote:"I need music. It's like my heartbeat, so to speak. It keeps me going no matter what's going on.",
  source:"LeBron James",
  citation:"247 Sports",
  year:"2019"
  }
];
    
function getRandomQuote(){
  var quoteIndex = Math.floor(Math.random()*(quotes.length));
  for(var i = 0; i < quotes.length; i++){
    return quotes[quoteIndex];
  }
}
function printQuote(){
  var quotes = getRandomQuote();
  var htmlString = ""; 
  htmlString+="<p class='quote'>"+ quotes.quote + "</p>";
  htmlString+= "<p class='source'>"+ quotes.source;

  if (quotes.citation && quotes.year !== undefined){
    htmlString+= '<span class="citation">'+ quotes.citation+'</span>'
    htmlString+='<span class="year">'+ quotes.year+'</span>';
  } else if (quotes.citation !== undefined){
    htmlString+='<span class="citation">' +quotes.citation + '</span>'
  } else if (quotes.year !==undefined){
    htmlString+='<span class="year">'+ quotes.year+'</span>'
  }
htmlString+="</p>";
document.getElementById('quote-box').innerHTML= htmlString;
};

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

