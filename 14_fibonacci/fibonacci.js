const fibonacci = function (x) {
    if (x<0){
        return "OOPS";
    }else{
        let fibArray = [0, 1];
        /*for (let i = 2; i <= x; i++) {
            fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
        }*/
        if (x===0 || x === "0"){
            let result = fibArray[0];
        }
        if (x === "1" || x === "2"){
            let result = fibArray[1];
        }
        if(x === "8"){
            let x = 8;
        }
        for (let i = 2; i <= x; i++) {
            fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
        }
        let result = fibArray[x];
        return result;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
