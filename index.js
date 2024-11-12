<<<<<<< HEAD
//creating a sequence of numberr
=======
<<<<<<< HEAD
<<<<<<< HEAD
//creating a sequence of number 
=======
//creating a sequence of numberr
>>>>>>> 95f1ab4ee80ec4c4685e541e92b8de2374910734
>>>>>>> main
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
// Select elements
const dragItem = document.getElementById("dragItem");
const dropZone = document.getElementById("dropZone");

// Add event listeners for drag events
dragItem.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", dragItem.id);
    dragItem.style.opacity = "0.5";
});

dragItem.addEventListener("dragend", () => {
    dragItem.style.opacity = "1";
});

// Add event listeners for drop events on the drop zone
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault(); // Prevent default to allow drop
    dropZone.style.backgroundColor = "#f0f0f0";
});

dropZone.addEventListener("dragleave", () => {
    dropZone.style.backgroundColor = "";
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    dropZone.appendChild(draggedElement); // Move the element to the drop zone
    dropZone.style.backgroundColor = "";
});
>>>>>>> new
=======
>>>>>>> 95f1ab4ee80ec4c4685e541e92b8de2374910734
>>>>>>> main
