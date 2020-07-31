/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. (This one is a bit tricky and you will need to look it up).
Console log every step of the way.
*/

let person = {
    name: "John",
    surname:"Smith",
  };
  
  console.log(person.name)
  console.log(person.surname)
  
  person["name"] = "Pete";
  console.log(person.name)
  
  delete person["name"]
  console.log(person)