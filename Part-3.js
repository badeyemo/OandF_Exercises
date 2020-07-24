// Question 1
function myName(){
    var name = "Adeyemo Bamidele Victor";
    return("name");
};

myName();


var favoriteFoods = ["pizza", "ice cream"];

// Question 2
function randomFoods(){
    return favoriteFoods[Math.floor(Math.random() *favoriteFoods.length)];
};
randomFoods();


var numbers = [1,2,3,4,5,6,7,8,9,10];


// Question 3
function displayOddNumbers(){
    for(var count=0; count< numbers.length; count+=2){
    console.log(numbers[count]);
    }
}
displayOddNumbers();

// Question 4
function displayEvenNumbers(){
    for(var count=1; count< numbers.length; count+=2){
    console.log(numbers[count]);
    }   
}
displayEvenNumbers();

// Question 5
function returnFirstOddNumber(){
    for(var count=0; count< numbers.length; count+=2){
    return(numbers[count]);
    }
}
returnFirstOddNumber();

// Question 6
function returnFirstEvenNumber(){
    for(var count=1; count< numbers.length; count+=2){
        return(numbers[count]);
    }   
}
returnFirstEvenNumber();

// Question 7
function returnFirstHalf(){
    for(var count=0; count< numbers.length/2; count++){
    console.log(numbers[count]);
    }
}
returnFirstHalf();

// Question 8
function returnSecondHalf(){
    for(var i=numbers.length/2; i< numbers.length; i+=1){
    return(numbers[i]);
    }
}
returnSecondHalf();
