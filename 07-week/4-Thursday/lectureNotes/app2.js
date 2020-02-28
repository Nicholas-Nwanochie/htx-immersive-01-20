
const http = require('http');

// const fs = require('fs');


// let fileContent = "LOrem ipsum dolor ...."



// fs.writeFile("ourFile.txt", fileContent, (error)=>{

//     if(error){
//         console.log(error.message);
//         return
//     }
//     console.log("File was saved ourFile.txt");

// })


// let fileName = "./test.html";

// fs.readFile(fileName, (error, buffer) => {

//     if(error){
//         console.log(error.message);
//         return;
//     }

//     console.log(buffer.toString());

// })



let myServer = http.createServer((req, res)=>{

    //here where code goes to send back to user

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.end("<h1 style='color:red;'>He World</h1>")

});
 

myServer.listen(3000, ()=>{
    console.log("listening on port 3000");
})