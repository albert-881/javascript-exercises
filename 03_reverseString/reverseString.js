const reverseString = function(word) {
    let w = word.split('');
    let rword = w.reverse();
    let reversedWord = rword.join('');
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
