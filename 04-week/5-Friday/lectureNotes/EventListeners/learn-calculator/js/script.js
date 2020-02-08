

let buttons = document.querySelector('.buttons');

let result = document.getElementById('result');

let input =  document.getElementById('input');

let numStorage = [];
let stringStorage = [];
let limitOperation = false;


let sum = 0;

let validChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "."];
let validOpChar = ["+"];
let otherChar = ["-"];

buttons.addEventListener('click', function(e){

    // if target is not = sign or clear sign then append string to input
    // when target is equal then split the string up by + symbol
    // add all of the content and remove array contents, putting the result as first value
    // display on screen
    // when clear entered, clear input field and the array


    if (validChar.includes(e.target.textContent) && limitOperation == false){
        //add to input field
        input.innerText = input.innerText + e.target.textContent;
        
    }
    else if(validOpChar.includes(e.target.textContent) ){
        input.innerText = input.innerText + e.target.textContent;
        limitOperation = false;
    }
    else if(e.target.textContent == "="){
        //split the array and add the contents

        stringStorage = input.innerText.split("+");
        console.log("stringStorage ", stringStorage);
        //parseFloat(string)

        let numStorage = stringStorage.map(function(strNum){

            return parseFloat(strNum);
        })

        //reduce to add all of the contents

        sum = numStorage.reduce(function(x, y){
            return x + y;
        })

        console.log("calculation ", sum);

        input.innerText = sum.toString();

        numStorage = [];
        stringStorage = [];
        limitOperation = true;

        console.log("numStorage ", numStorage);
        
    }
    else if (e.target.textContent == "C"){
            input.textContent = "";
            numStorage = [];
            stringStorage = [];
            limitOperation = false;
            sum = 0;      
    }

})





