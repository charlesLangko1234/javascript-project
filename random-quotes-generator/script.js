const quotes = document.getElementsByTagName('h1')[0];
const author = document.getElementsByTagName('p')[0];
const btn = document.getElementsByTagName('a')[0];

const listQuotes = [
    "Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart. -Roy T. Bennett, The Light in the Heart",
    "Instead of worrying about what you cannot control, shift your energy to what you can create. -Roy T. Bennett, The Light in the Heart",
    "The purpose of our lives is to be happy. -Dalai Lama",
    "Life is what happens when you’re busy making other plans. -John Lennon",
    "Get busy living or get busy dying. -Stephen King",
    "You only live once, but if you do it right, once is enough. -Mae West",
    "Many of life’s failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
    "If you want to live a happy life, tie it to a goal, not to people or things. -Albert Einstein"
];

btn.addEventListener('click',()=>{
    let index = Math.floor(Math.random()*8);
    let quotesData = listQuotes[index].split('-');
    
    quotes.innerHTML = `" ${quotesData[0]} "`;
    author.innerHTML = `- ${quotesData[1]}`;
});