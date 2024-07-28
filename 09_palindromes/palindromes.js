const palindromes = function (word) {
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
    word = word.toLowerCase();
    let letArr = word.split('');
    let fil = letArr.filter((letter) => alphabet.includes(letter));
    let fin = fil.join('')
    let final = fil.reverse().join('');
    
     return final === fin;
    //return singles.filter((letter) => )
};

// Do not edit below this line
module.exports = palindromes;
