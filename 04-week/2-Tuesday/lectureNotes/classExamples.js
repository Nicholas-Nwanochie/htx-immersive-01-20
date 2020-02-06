
// console.log('hello class')

// function myFunction(){

// }

// var school = "dig crafts"

// console.log('hello world')

// "hello"
// 'hello'

// `sldkjfs
// sldkfjs
// lskdjfs
// `

// "hello" + " " + "there"

// var myString = "hello";

// var myInt = 2.1;

// var myBool = true;

// myBool = true;

// var myString = "hello";

// console.log(myString.length)


// var num = 1; //integer

// var num2 = 1.2;  //float

// var myString = "school";
// console.log(myString.length)

// var concat = "hello" + "world world hello world";

// console.log(concat);
// console.log(concat.indexOf("world"));

// var boolean = !true; //false
// console.log(boolean)

// var not = !boolean

// console.log(not);

// var and = boolean && false;

// console.log(and)

// var or = boolean || true;

// console.log(or)

// var equals = true == false; //false

// console.log(equals)

// {/* <=  >=  == */}


// var a = 4;
// var b = 4;

// if (a == b){
//     console.log("equality")
// }


// var age = 20;

// if (age >= 21) {
//     console.log("you get free beer");
// } else if (age < 18) {
//     console.log("What are you even doing here?");
// } else {
//     console.log("Sorry, no beer for you");
// }

// var expr = "Papayas";

// if(expr == 'Oranges'){
//     console.log('Oranges are %0.59 a pound')
// }
// else if(expr == 'Mangoes'){
//     console.log("Mangoes")

// }
// else if(expr == 'Papayas'){
//     console.log("Mangoes and papayas are $2.79 a pound")
// }
// else {
//     console.log('Sorry, we ar out of' + expr + ".")
// }


// var expr = "Papayas";

// switch(expr){

//     case 'Oranges':
//         console.log('Oranges are $0.59 a pound')
//         break;
//     case 'Mangos':
//         console.log("Mangoes")
//         break;
//     case 'Papayas':
//         console.log("Mangoes and papayas are $2.79 a pound")
//         break;
//     default:
//         console.log('Sorry, we ar out of' + expr + ".")
//         break;

// }

// var count = 0;

// while (count < 10){
    
//     console.log(count);
//     // count = count +1;
//     count++;
    
// }


// for(var count = 0; count < 10; count++){

//     console.log(count);

//     for(var inner = 0; inner < 3; inner++){

//         console.log(inner)
//     }
// }

// var lottoNum = [];

// lottoNum.push(3);

// console.log(lottoNum);

// lottoNum.push(34);

// console.log(lottoNum);


// /// [3, 34]

// lottoNum.pop();

// console.log(lottoNum)


// var lottoNums = [23, 11, 43, 19, 37, 16];

// var newNum = lottoNums.splice(2, 2)


// console.log(newNum)
// console.log(lottoNums)

// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// var newAnimals = animals.slice(2, -1)
// console.log(animals);
// console.log(newAnimals)



// lottoNums.shift()

// console.log(lottoNums)


// console.log(lottoNums[20]);

// lottoNums[1] = "hello";

// console.log(lottoNums)

var words = 'oh hey how is it going';


// var reverse = "";

// for (var i = 0; i< words.length; i++){

//     // console.log(words[i]);

//     reverse = words[i] + reverse;
// }

// console.log(reverse)

// var newArray = words.split('');

// newArray.reverse();

// words2 = newArray.join('');

// console.log(words2);



// var reverse = newArray.reverse();
// console.log(reverse);
// console.log(newArray);



// var words2 = newArray.join(' ');

// console.log(words2);

// var newArray = words.split('how');

// console.log(newArray.pop())

// console.log(newArray)


// var myArray = [1, 2, 5, 7, 3];

// for (var i = 0; i < myArray.length; i++){

//     console.log(myArray[i]);

// }

// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'
// }

// console.log(characterSheet["name"])

// var characterSheet = {}

// characterSheet["name"] = "Tim berners-lee"


// console.log(characterSheet)

// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'
// };
// characterSheet["name"]

// console.log(characterSheet);

// delete characterSheet["title"];

// console.log(characterSheet);

// var key = "name";

// var keys = ["name", "title", "powers"]

// for( var index = 0; index < keys.length; index++){
//     var keyName = keys[index];
//     console.log(characterSheet[keyName]);
// }

// characterSheet[key];

// console.log(characterSheet[key])


// def hello():
//     pass

function hello(fname, lname){

    console.log("hello " + fname + " " + lname);

    return "sldjls;j;lskdjf"
}

var myReturn = hello("Alina", "Belova");

console.log(myReturn)