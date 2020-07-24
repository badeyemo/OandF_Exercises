// Question a
function add(m, n){
    return m + n;
}
add(5, 2);

function subtract(m, n){
    return m - n;
}
subtract(6, 2);

function multiply(m, n){
    return m * n;
}
multiply(4, 2);

function divide(m, n){
    return m / n;
}
divide(2, 2);

// Question b
function sayHello(name){
    if(name == "Bamidele"){
        return "Hello Boss";
    } else {
        return "Hello " + name;
    }
};
sayHello("Bamidele");
sayHello("Tim");

// Question c
function average(array){
    var sum = 0;
    for(var count=0; count<array.length; count++){
        sum+= array[count];
    }
        var average = sum/array.length;
        console.log(average);

}
average([1,2,3,4,5]);
average([1,2,3,4,5,6]);
average([10,20]);

// Question d
function createStudent(firstName, lastName){
    return{
        firstName: firstName,
        lastName: lastName
    }
}
createStudent("Elie", "Schoppick");
createStudent("Tim", "Garcia");

// Question e
var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppick");
var students = [tim, matt, elie];

// Question f
function findStudentByFirstName(name){
    var alphaCase = `${name[0].toUpperCase()}`;
    for (var count=1; count< name.length; count+=1){
        alphaCase += name[count].toLowerCase();
    }
    for(var counter=0; counter< students.length; counter++){
        if(students[counter].firstName == alphaCase){
            return true;
        }
    }
          return false;
};
findStudentByFirstName("matt");
findStudentByFirstName("janey");

// Question g
function extractEveryThirdArray(arr){
    for(var i=2; 1< arr.length; i+=3){
        return arr[i];
    }
};

extractEveryThirdArray([1,2,3]);
extractEveryThirdArray(["a", "b", "c", "d"]);

// Question h
function countEvensandOdds(arr){
    var count = {oddCount: 0, evenCount: 0}
    for(var k=0; k< arr.length; k++){
        if(arr[k] % 2 !=0){
          count.oddCount++;
        } else {
            count.evenCount++;
        }
    }
    return count;
};

countEvensandOdds([1,2,3,4]);

// Question i)
var myVar = "Hello from global";
function scopePractice() {
var myVar = "Hello from function scope";
}
scopePractice();
console.log(myVar);
it consolelogs Hello from global

var tricky = "Hello from global";
function trickyScopePractice() {
tricky = "Hello from function scope";
}
console.log(tricky);
it consolelogs  Hello from global
