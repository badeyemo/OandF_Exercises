var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://stackoverflow.com/Questions/234075/what-is-your-best-programmer-joke"
};

// Question 1
programming.languages.push("Go");

// Question 2
programming.difficulty = 7;

// Question 3
delete programming.jokes;

// Question 4
programming.isFun = true;

// Question 5
for(var count=0; count< programming.languages.length; count++){
    console.log(programming.languages[count]);
};

// Question 6
for(var keys in programming){
    console.log(keys);
};

// Question 7
for(var item in programming){
    console.log(programming[item]);
};
   