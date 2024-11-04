import fetch from "node-fetch";

async function requestData() {
    try{
        const response = await fetch("hello world.txt");
        if(!response.ok) throw new Error("Network response was not ok");
        const text = await response.text();
        console.log(text);
    }catch(error){
        console.log(error)
    }
}
requestData();
