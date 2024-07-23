const sumAll = function(num1, num2) {
    let sum = 0;
    let i = num1;
    
    if((num1 < 0 || num2 < 0 || !Number.isInteger(num1)) || !Number.isInteger(num2)) {
        return 'ERROR';
    }

    else if(num1 < num2){

        while(i <= num2){
            sum += i;
            i++;
        }
    console.log(sum);
    return sum;
}
    else if(num1 > num2){

        while(i >= num2){
            sum += i;
            i--;
        }
        console.log(sum);
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
