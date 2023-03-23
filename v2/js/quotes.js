const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

const quotes = [
    {
        "text": "If facts are the seeds that later produce knowledge and wisdom, then the emotions and the impressions of the senses are the fertile soil in which the seeds must grow.",
        "author": "Rachel Carson"
      },
      {
        "text": "An ant on the move does more than a dozing ox",
        "author": "Lao Tzu"
      },
        {
        "text": "Skill to do comes of doing.",
        "author": "Ralph Emerson"
      },
      {
        "text": "When you come to the end of your rope, tie a knot and hang on.",
        "author": "Franklin Roosevelt"
      },
      {
        "text": "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.",
        "author": "Paavo Nurmi"
      },
      {
        "text": "A short saying oft contains much wisdom.",
        "author": "Sophocles"
      },
      {
        "text": "Learn to listen. Opportunity could be knocking at your door very softly.",
        "author": "Frank Tyger"
      }

];

function clickHandler(event){    
    event.preventDefault();
    randomQuote();
}

function randomQuote(){
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    quote.textContent = `"${random.text}"`;
    author.textContent = random.author;
}

function init(){
    randomQuote();
    changeQuote.addEventListener('click', clickHandler);
}

init();