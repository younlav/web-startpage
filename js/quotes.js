const quotes = [
    {
        quote : "Be yourself; \neveryone else is already taken.",
        author : "Oscar Wilde",
    },
    {
        quote : "Two things are infinite: \nthe universe and human stupidity; and I'm not sure about the universe.",
        author : "Albert Einstein",
    },
    {
        quote : "A room without books is like a body without a soul.",
        author : "Marcus Tullius Cicero",
    },
    {
        quote : "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author : "Dr. Seuss",
    },
    {
        quote : "You only live once,\nbut if you do it right, once is enough.",
        author : "Mae West",
    },
    {
        quote : "If you tell the truth,\nyou don't have to remember anything.",
        author : "Mark Twain",
    },
    {
        quote : "A friend is someone who knows all about you and still loves you.",
        author : "Elbert Hubbard",
    },
    {
        quote : "We accept the love we think we deserve.",
        author : "Stephen Chbosky, The Perks of Being a Wallflower",
    },
    {
        quote : "Knowing yourself is the beginning of all wisdom.",
        author : "Aristotle",
    },
    {
        quote : "Perhaps one did not want to be loved\nso much as to be understood.",
        author : "George Orwell",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;