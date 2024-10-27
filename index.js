const user1 = {
    userdata: function(){
        //the this will be used as reference to the object 
        return `your username is ${this.username} and your password is ${this.password}`; 
    }
}
//creating another object 
const user2 = {
    //adding two key value pairs like the first function 
    username: "jhon marcel adelantar",
    password: "uzumaki@15"
}
console.log(user1.userdata.call(user2));