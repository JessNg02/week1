/*
Let’s try 5 array operations.
Create an array styles with items “Jazz” and “Blues”.
Append (add) “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
Console.log every step of the way
*/

let music =["Jazz", "Blues"]
music.push("Rock-n-Roll")
console.log(music)

music[1]= "Classics"
console.log(music)

music.shift()
console.log(music)

music.unshift("Rap", "Reggae")
console.log(music)