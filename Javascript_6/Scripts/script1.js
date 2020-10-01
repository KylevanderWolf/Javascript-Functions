//Deel A:
/*Bullet List Cheese Bread
    makeCheeseBread
        -Bread.
        -Cheese.
*/

//make cheese bread
function makeCheeseBread() {
    //Bread;
    //Cheese;
}

//Cheese Bread Function
function makeCheeseBread() {
    console.log("Grab your piece of bread");
    console.log("Put the Cheese on it");
}

makeCheeseBread()



//Deel B:
//Declaration
function makeSandwich(topping) {
    console.log("There you go, a sandwich with" + " " + topping)
}
//Calling the function
//first Sandwich
makeSandwich("cheese")
//Second Sandwich
makeSandwich("chicken")

//Deel C:
//Declaration
function calculateDiscountedPrice(totalAmount, discount) {
    return Math.round(totalAmount - discount);
}
//Calling the function
console.log("You have to Pay " + calculateDiscountedPrice(10.99, 5.49) + " Euro")



//Deel D:
//Declaration
function newDicountedPrice(totalAmount, discount) {
    if (totalAmount > 25) {
        return Math.round(totalAmount - discount);
    }
    return totalAmount
}
//Calling the function
console.log(newDicountedPrice(300, 5))