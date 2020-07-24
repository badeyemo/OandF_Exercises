function displayFullName(firstName, lastName){
    return firstName + " " + lastName;
};

displayFullName("Bamidele", "Adeyemo");

function createCalculator(x, y){
    return{
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
        multiply: (x, y) => x * y,
        divide: (x, y) => x / y
    }
};

var calc = createCalculator();
calc.add(20,20);
calc.subtract(2,2);
calc.multiply(2,2);
calc.divide(12,2);
