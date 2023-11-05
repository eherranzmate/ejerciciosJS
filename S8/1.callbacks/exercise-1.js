const numbersList = [];

function sum(a, b){
    return a + b;

}

function substract(a, b){
    return a - b;
}

function father(a, b, callback){
    numbersList.push(callback(a,b));
}

father (3,2 , substract);
father (6,3,sum);
console.log(numbersList);

