//Create an XLMHttpRequest object 
const xhttp = new XMLHttpRequest();

//Define a callback function 
xhttp.onload() = function(){
    //in this section of code i can used the data
    this.responseText;
}

//to send a request 
xhttp.open('GET', "ajax_info.txt"); 
xhttp.send();