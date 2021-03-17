/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

const quotes = [
  {
    quote: "Life is what happens when you’re busy making other plans.",
    source: "John Lennon",
    year: "1977",
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy",
    tags: "#politics",
  },
  {
    quote:
      "Let us always meet each other with smile, for the smile is the beginning of love.",
    source: "Mother Teresa",
    citation: "",
    year: "1980",
  },
  {
    quote: "An eye for eye only ends up making the whole world blind.",
    source: "Mahatma Gandhi",
    year: "1930",
  },
  {
    quote: "And in the end, the love you take, is equal to the love you make",
    source: "The Beatles",
    citation: "The End",
    year: "1969",
  },
];

function getRandomQuote(array) {
  const num = Math.floor(Math.random() * array.length);
  return array[num];
}

function printQuote() {
  const randomQuote = getRandomQuote(quotes);

  let HTMLContent = `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source} `;

  if (randomQuote.citation) {
    HTMLContent += `<span class="year">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year) {
    HTMLContent += `<span class="citation">${randomQuote.year}</span>`;
  }

  if (randomQuote.tags) {
    HTMLContent += `<span class="citation">${randomQuote.tags}</span>`;
  }

  HTMLContent += `</p>`;

  document.getElementById("quote-box").innerHTML = HTMLContent;
}

function rgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let rgb = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = rgb;
}

setInterval(() => {
  printQuote();
  rgbColor();
}, 6000);

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
