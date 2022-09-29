//q2
const gretter= (myArray) => {
    let greenText = 'Hello ';
    for(let i of myArray){
        console.log(`${greenText} ${i}`)

    }
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);

//q2
function capitalize(word){
    const [first, ...rest ] = word;
    word = first.toUpperCase() + rest.join('');
    return word;
    

}
console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

//q3
const colors = ['red','blue', 'green'];

const capitalizeColors = colors.map(lowerCaseletter => capitalize(lowerCaseletter));

console.log(capitalizeColors);

//q4
function checkNum(num){
    return num > 20;
}

const numbers = [23,434,54,12,4,43];
const finalNumbers = numbers.filter(checkNum);
console.log("the unfiltered array is 23,434,54,12,4,43")
console.log(finalNumbers + " is the filtered array");

//q5
const numArray = [120,34,21]

const sumOfNum = numArray.reduce((sum, curr) => {
    sum += curr;
    return sum;
    
},0)

const prodOfNum = numArray.reduce((sum2, curr2) => {
    sum2 *= curr2;
    return sum2;
    
},1)
console.log("the array values are 120,34,21")
console.log(prodOfNum + " is the product sum")
console.log(sumOfNum + " is the addition sum")

//q6
class Car{
    constructor(model,year){
        this.model = model;
        this.year = year;
    }
    detail(){
        return "The model of this car is " + this.model +" and it was released " + this.year
    }

}

class Sedan extends Car{
    constructor(model, year,balance){
        super(model,year);
        
        this.balance = balance;
    }
    info(){
        return this.model + " has a balance of $" +this.balance;
    }
}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.detail());
const sedan = new Sedan('Volvo SD',2018,30000)
console.log(sedan.info())


