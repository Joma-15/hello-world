//creating a sequence of number 
const primeNumbers = [1,2,3,4,5,6,7,8,9,10];
//hoisting method
//pass the even number the array of numbers and the arrow function that will filter all the even numbers 
const evenNumber = removeEven(primeNumbers, (x) => x%2 == 0);

/*creating the actual function removeEven and using the callback method
to execute my other arrow function after the execution of the removeEven
it means that the first function remove even will traverse to all the element 
in the array first before filtering the even number using the arrow function that 
we pass as parameter value */

//this will take two parameter value the array and the arrow function 
function removeEven(primeNumbers, callback){
    //Initializing a container to store the even numbers 
    const container = []; 
    //traversing to all the element in the primeNumbers
    for(const x of primeNumbers){
        //calling out the arrow function to filter the even numbers 
        if(callback(x)){//pass the x which is the traverse element
            //storing all the even values to the container 
            container.push(x);
        }
    }
    return container;//returning the filtered array
}
console.log(evenNumber);