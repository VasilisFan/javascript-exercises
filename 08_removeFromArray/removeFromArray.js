const removeFromArray = function(array , ...args) {
    let newArray = [];
    for (let i of array){
        if (!args.includes(i)){
            newArray.push(i);
        }
    }
    return newArray;
};

module.exports = removeFromArray;
