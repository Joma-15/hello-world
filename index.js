// //concept of inheritance in javascriipt
// class Parent{
//     constructor(){
//         //it cannot be accessed because it is defined as a local variable
//         //it should be define as a this to treat it as a property
//         const name = "hello world";
//         this.usename = "hi world";
//     }
// }
// class Child extends Parent{
//     constructor(){
//         super();
//     }
// }
// const anak = new Child();
// console.log(anak.name);
// console.log(anak.usename)

//getters and setters in javascript 
class UserData{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
    //getters 
    get usename(){
        return this.username;
    }
    //setters 
    set usename(x){
        this.username = x;
    }
}
//crfeating an instance of the object 
const user = new UserData("Marcel","uzumaki@15");
user.usename = "hello world"; 
console.log(user.usename);