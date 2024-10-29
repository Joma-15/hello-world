//in javascript we can nest a fuckin function 
const sayHello =(function () {
    let text = ""; 
    return function () {
        text += "hello world"; 
        return text;
    }
})();

console.log(sayHello());