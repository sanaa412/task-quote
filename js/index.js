const getQuote = function() {
    const quotes = [
    {
        quote: "Be yourself; everyone else is already taken",
        author: "― Oscar Wilde"
    },
    {
        quote: "“A room without books is like a body without a soul“",
        author: "― Frank Zappa"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West"
    },
    {
        quote:  "“Be the change that you wish to see in the world.”",
        author:  "― Mahatma Gandhi"
    },
    {
        quote:  "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain"
    },
    {
        quote: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        author:  "― Maya Angelou"
    },
    {
        quote: "“Always forgive your enemies; nothing annoys them so much.”",
        author:  "― Oscar Wilde"
    },
    {
        quote:  "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author: "― Mahatma Gandhi"
    },
    {
        quote:  "“We accept the love we think we deserve.”",
        author: "― Stephen Chbosky"
    },
    {
        quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author:  "― Dr. Seuss"
    }
];
    var total = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteOutput").innerHTML = quotes[total].quote;
    document.getElementById("authorOutput").innerHTML = quotes[total].author;
}



