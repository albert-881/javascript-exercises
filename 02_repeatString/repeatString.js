const repeatString = function(word,num) {
    if (num < 0){
        return 'ERROR'
    }
    let j = 0;
    let str1 = ""
    while (j < num){
       str1+=word;
       j++;
    }
    console.log(str1);
    return str1;
}

// Do not edit below this line
module.exports = repeatString;
