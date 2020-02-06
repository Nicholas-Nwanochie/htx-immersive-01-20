const num = 3;

function multiplyBy2 (inputNumber){
    
    const result = inputNumber * 2;

    function printNum (){
        console.log(inputNumber);
    }

    printNum();

    return result;
}


const output = multiplyBy2(4);

const newOutput = multiplyBy2(10);

console.log(multiplyBy2)