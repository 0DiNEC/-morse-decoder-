const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********' : ' '
};

function decode(expr) {
    let a_decodWords = [];
    let s_morze = [];
    let s_decodeAnswer = "";
    for (let i = 0; i < expr.length; i += 10) {
        let decodeWord = "";
        for (let j = i; j < i + 10; j++) 
            decodeWord += expr[j];

        a_decodWords.push(decodeWord);
    }

    for (let i = 0; i < a_decodWords.length; i++) {
        s_morze.push(a_decodWords[i].replaceAll('0', ' ').trimStart().replaceAll(' ', '0').replaceAll('11', '-').replaceAll('10', '.'));
    }

    for (const morze of s_morze) 
        s_decodeAnswer += MORSE_TABLE[morze];
    
    return s_decodeAnswer;
}

module.exports = {
    decode
}