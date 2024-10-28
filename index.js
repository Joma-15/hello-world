function Person(first, last, age){
    this.first = first;
    this.last = last;
    this.age = age;
}
Person.prototype.gender = "male"; 
const p = new Person("Marcel", "adelantar", 19);
console.log(p.gender)