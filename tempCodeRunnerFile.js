function getData(){
    document.getElementById("demo").innerHTML = "hello world"; 
    async function storedData(){
        const response = await fetch("hello world.txt"); 

        //check if the response is ok or not 
        if(!response.ok()){
            throw new console.error("cannot fetch data in the server");
        }
        const data = await response.json()//converting the data into a json object 
        console.log(data);
    }
}