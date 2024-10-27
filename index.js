// const user1 = {
//     userdata: function(){
//         //the this will be used as reference to the object 
//         return `your username is ${this.username} and your password is ${this.password}`; 
//     }
// }
// //creating another object 
// const user2 = {
//     //adding two key value pairs like the first function 
//     username: "jhon marcel adelantar",
//     password: "uzumaki@15"
// }
// console.log(user1.userdata.call(user2));

//using the bind method to borrow object from another object

// const foodList = {
//     food1: 'apple', 
//     food2: 'banana', 
//     food3: 'orange', 
//     eatFood: function(){
//         let foodEat = ""; 
//         Object.keys(this).forEach(key => {
//             foodEat += this[key];
//         });
//         return `I want to eat ${foodEat}`;
//     }
// }
// console.log(foodList.eatFood());

//creating a ternary and nullish operator 
const value = null ?? 'empty';
const istrue = (10 > 5) ? true:false;

//using the arrow function to write shorter function it is like lambda expression in java
let getUserdata = (username, password) => `hello my name is ${username} and my password is ${password}`; 

console.log(value + "\n" + istrue); 
console.log(getUserdata("jhon Marcel adelantar", "uzumaki@15"));
