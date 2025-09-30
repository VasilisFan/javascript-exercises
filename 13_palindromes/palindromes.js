const palindromes = function (x) {
    let temp = "";
    let string = String(x);
    for (let i of string){
        temp = i + temp;
    }
    if (string===temp){
        return true;
    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
