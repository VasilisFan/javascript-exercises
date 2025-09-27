const repeatString = function(x,y) {
    if(x<0 || y<0){
        return "ERROR";
    }else{
        let text = ""
        for (let i=0; i<y; i++){
            text += x;
        }
        return text;
        }

};

// Do not edit below this line
module.exports = repeatString;
