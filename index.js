// //using the set interval will call the function in every given millisecond
// let counter = 200;
// let intervalCounter = 1000;
// let word = "hello world"; 
// let index = 0;//to track the current index or position of the iteration of the word

// //hoisting
// function delayPrint(){
//     let container = ""; //container per iteration

//     for(let x of word){
//         setTimeout(() => {
//             container += x;//storing the current state of the character
//             document.getElementById("demo").innerHTML += container;//adding the current state of the container
//         }, index * counter);
//         index++;//incrementing the value of the index per iteration
//     }
//     intervalCounter = index + 1000;
// }

// setInterval(delayPrint, intervalCounter);

// function isEven(n){
//     document.getElementById("demo").innerHTML = n;
// }
// //using the promises method to filter the result 
// let myPromise = new Promise((accept, reject) => {
//     let n = prompt("Enter a fuckin number : ");
//     n = Number(n);//casting the n variable into a valid integer

//     (n % 2 == 0) ? accept("even"):reject("odd");
// });

// myPromise.then(
//     (value) => isEven(value), 
//     (error) => isEven(error)
// );

// const myPromise = new Promise((success, reject) => {
//     let istrue = true;

//     istrue ? success('istrue'):reject('isfalse');
// });

// //creating promises 
// myPromise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(result => {
//         console.error(result);
//     })
//     .finally(() => {
//         console.log("The operation is finish");
//     })

// using asyn and await 
// using the async and await methods 
// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

// async function getResult(){
//     let n = prompt("Enter a number : ");
//     n = Number(n);
//     let p = new Promise((resolve, reject) => (n % 2 == 0) ? resolve("even") : reject("odd"));

//     try {
//         document.getElementById("demo").innerHTML = await p;
//     } catch (error) {
//         document.getElementById("demo").innerHTML = "odd";
//     }
// }
// getResult();
