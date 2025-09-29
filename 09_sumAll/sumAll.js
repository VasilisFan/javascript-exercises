const sumAll = function(x , y) {
    if (x<0 || y<0 || !Number.isInteger(x) || !Number.isInteger(y)){
        return 'ERROR';
    }else{
    let max = x;
    let min = y;
    let sum = 0;
    if (max<y){
        max = y;
        min = x;
    }
   for (let i=min; i<=max; i++){
            sum += i;
        }
    return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
