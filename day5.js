/*
	Loop over numbers 1 to 100 (inclusive) and only print numbers that are odd.
	Do not copy over the code from the continue statement example.
*/

/*for (var i = 0; i < 100; i++)
{
    if (i%2 == 0)
    {
        continue; 
    }
    //i is odd then
    console.log(i + "is an odd #")
}
*/


/*
	Given an array, print out all its members using the 
		1. for loop, 
		2. for in loop, 
		3. for of loop,
		4. while loop.
*/
//1
/*let candy= ["grape", "orange", "mint", "berry"];
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

*/

//2
/*let books = ["fantasy", "sci-fi","horror"];

for (let book in books) {
  console.log(book, "and", books[book]); 
}
// 0 and Apple 
// 1 and Orange
// 2 and Pear
*/

//3
/*let candies = ["grape", "orange", "mint", "berry"];

// iterates over array elements
for (let candy of candies) {
	console.log( candy );
}
*/

//4

/*let candies = ["grape", "orange", "mint", "berry"]
i = 0;
while (i <= 3) { 
  console.log( i ); // 
	i++;
}
*/

/*
Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/


/*for (i=12; i <= 1901; i++) {
    if (i%3 == 0){
    console.log( i + "Fizz")
    }
    if (i%5 == 0){
    console.log( i + "Buzz")
    }else if (i%3 == 0){
        continue;
    }

    else if(i%5 == 0){
        continue;
    }
        console.log (i + "FizzBuzz")
    
}
*/

/*
	Extend FizzBuzz and make it reusable for any range of numbers by using a function.
	Example: 
	fizzBuzz(0, 100) --> outputs the same as above
	fizzBuzz(12, 1901) --> Also works and outputs correctly.
*/

// set condition = 100 for #3

