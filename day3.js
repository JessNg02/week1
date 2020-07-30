/*
Build two objects for 2 students, assign them names and grades for some subject.
Print the name of the student that has a higher grade in a certain subject.
*/

let Matt = {
    name: "Matt",
    Math: 96,
    Chem: 89

}

let Vince = {
    name: "Vince",
    Math: 97,
    Chem: 90
}

if (Matt.Math>Vince.Math){
    console.log(Matt.name)
}   else{ 
    console.log(Vince.name)

}
