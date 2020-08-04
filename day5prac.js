/*
Write a function min(a,b) which returns the least of two numbers a and b.
Part 2: 
Change the return statement and return true if a is less than b. 
Else return false.
*/

/*function min(a,b){
    if (a<b){
        return a;
    }   else {
        return b
    }
}

console.log(min(2,5))
*/

//Write a program that divides two pairs of numbers 
//and returns the difference between them using functions.

function division(num1, num2){
    return num1/num2;
}
function result(division1, division2){
    return division1 - division2;
}

//call division of products
console.log(result(division(20,10), division(3,6)))
