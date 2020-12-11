/*the basic function of this .js file is to generate a random message, using rng, arrays
of words, and string interpolation*/

// Word arrays:
let adjective = ['pink', 'slow', 'messy', 'strong', 'incomplete', 'uncertain', 'intriguing', 
'contemplative', 'secure', 'happy', 'interesting', 'bitter', 'reliable', 'lucky'];
let noun = ['candle', 'bottle of syrup', 'vaccuum cleaner', 'postage stamp', 'car', 'orange',
 'apple', 'cat', 'dog', 'word',]
let adverb = ['sweetly', 'smoothly', 'unfairly', 'uncomfortably', 'always', 'never', 'safely']
let year = ['1942', '1850', '2000', '2020', '1900', '1066', '10,000 B.C.', '2012', '1980', 
'1776', '1400', '1984', '1917', '1935']
let verb = ['worry', 'snarl', 'laugh', 'cry', 'jump', 'nap', 'sing', 'smile']
let preposition = ['in', 'around', 'about', 'above', 'below', 'outside', 'through', 'over', 'to', 'from']
let greeting = ['Hello!', 'Hey there.', 'Howdy!',]
// Function to generate an appropriate random word:
let randomWord = (wordType) => {
    let r = Math.floor(Math.random()*wordType.length);
    return wordType[r];
}
// Final random message generated using string interpolation:
let message = `${randomWord(greeting)} This is the ${randomWord(adjective)} random message 
generator. Every time this page is loaded, a 
${randomWord(adjective)} ${randomWord(noun)} ${randomWord(adverb)} gets inserted ${randomWord(preposition)} the sentence.
Don't ${randomWord(verb)}, the technology used ${randomWord(preposition)} this ${randomWord(noun)}
is ${randomWord(adverb)} ${randomWord(adjective)}, and dates back to the year ${randomWord(year)}.`

/*Below is a console.log() statement I used for checking my work within this .js file by
alternatively commenting it in and out as needed. For the actual project, I chose to run 
the project in a web browser for more accessibility. As this is the case, the functionailty 
of this file is ultimately imported to the html file, where Document.write() is used.*/

//console.log(message)