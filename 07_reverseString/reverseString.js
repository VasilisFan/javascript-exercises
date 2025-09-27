const reverseString = function(x) {
    let text = x;
    let temp = "";
    for(let i of text){
        temp = i + temp;
    }
    return temp;
    //return text.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
