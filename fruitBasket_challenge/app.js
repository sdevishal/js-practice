/* You have a basket of apples, but you decide to give some away to your neighbor. How many apples are left in your basket?
Challenge:
Write a function that subtracts the number of apples given away from the total apples you started with, then returns the remaining apples. */

function remainingApples(totalApples, givenAway) {
return totalApples - givenAway

}
console.log(remainingApples(20, 5)) //15