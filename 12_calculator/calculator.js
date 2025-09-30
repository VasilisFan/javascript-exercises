const add = function(x,y) {
  return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(x) {
	let sum = 0;
  for (let i of x){
    sum += i;
  }
  return sum;
};

const multiply = function(x){
  let mul = 1;
  for (let j of x){
    mul = mul * j;
  }
  return mul;
};

const power = function(x,y) {
  let pow = 1;
	for (let i=0; i<y; i++){
       pow *= x; 
  }
  return pow;
};

const factorial = function(x) {
  if (x===0){
    return 1;
  }else{
    let fac = 1;
    for (let i=1; i<=x; i++){
      fac *= i;
    }
    return fac;  
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
