const quotes = [
    {
        quote: 'The way to get started is to quit talking and begin doing.',
        author: 'Walt Disney'
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: 'Oprah Winfrey'
    },
    {
        quote: 'Do one thing every day that scares you.',
        author: 'Eleanor Roosevelt'
    },
    {
        quote: "We are here to add what we can to life, not to get what we can from life.",
        author: 'William Osler'
    },
    {
        quote: "The art of life is to know how to enjoy a little and to endure very much.",
        author: 'William Hazlitt'
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: 'John Lennon'
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: 'Helen Keller'
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: 'Dalai Lama'
    },
    {
        quote: 'Life is 10% what happens to us and 90% how we react to it.',
        author: 'Charles R. Swindoll'
    },
    {
        quote: 'Life is short, and it is up to you to make it sweet.',
        author: 'Sarah Louise Delany'
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = `${todaysQuote.author}`