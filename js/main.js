var quotesArray = [
    {
        quote: 'Beware of what you become in pursuit of what you want.',
        author: 'Jim Rohn'
    },
    {
        quote: 'It\'s not what happens to you, but how you react to it that matters.',
        author: 'Epictetus'
    },
    {
        quote: 'The best revenge is massive success.',
        author: 'Frank Sinatra'
    },
    {
        quote: 'You miss 100% of the shots you don\'t take.',
        author: 'Wayne Gretzky'
    },
    {
        quote: 'Resentment is like drinking poison and waiting for your enemies to die.',
        author: 'Nelson Mandela'
    },
    {
        quote: 'Do not take life too seriously. You will not get out alive.',
        author: 'Elbert Hubbard'
    },
    {
        quote: 'The only way to do great work is to love what you do.',
        author: 'Steve Jobs'
    },
    {
        quote: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.',
        author: 'Oprah Winfrey'
    },
    {
        quote: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
        author: 'James Cameron'
    },
    {
        quote: 'If you can\'t explain it simply, you don\'t understand it well enough.',
        author: 'Albert Einstein'
    },
    {
        quote: 'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
        author: 'Robert Louis Stevenson'
    },
    {
        quote: 'The future belongs to those who believe in the beauty of their dreams.',
        author: 'Eleanor Roosevelt'
    },
    {
        quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
        author: 'Benjamin Franklin'
    },
    {
        quote: 'The best time to plant a tree was 20 years ago. The second best time is now.',
        author: 'Chinese Proverb'
    }
];

var prevRandomNum = null;

function randomQuoteGenerate() {
    var num;
    
    do {
        num = Math.floor(Math.random() * quotesArray.length);
    } while (num == prevRandomNum); 

    document.getElementById('quote').innerHTML = quotesArray[num].quote;
    document.getElementById('author').innerHTML = quotesArray[num].author;

    prevRandomNum = num; 
}
