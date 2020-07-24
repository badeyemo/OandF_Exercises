// Question 1
var myObj = {
    firstName: "Bamidele",
    lastName: "Adeyemo",
    occupation: "Software-Developer"
};

// Question 2
myObj.firstName;
myObj.lastName;
myObj.occupation;
myObj["firstName"];
myObj["lastName"];
myObj["occupation"];

// Question 3
myObj.hobby = "playing football";

delete myObj.occupation;

// question 4

/* The dot notation is used when we know the name of the key and it is not a variable or expression.
   The bracket notation is used when there is need to evaluate expression or pass in a variable to get the
   name of the key. */

// Question 5
var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
};

for(var key in namesAndHobbies){
    console.log(namesAndHobbies[key] + " => " + key);
};

// Question 6
namesAndHobbies.name = "Bamidele";
namesAndHobbies.hobby = "Reading";

if("name" in namesAndHobbies){
    console.log(namesAndHobbies.name, namesAndHobbies.hobby);
}; 