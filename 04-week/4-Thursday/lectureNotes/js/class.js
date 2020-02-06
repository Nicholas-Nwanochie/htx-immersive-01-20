



// (function add(a, b){

//     console.log(a + b)

//     return a+b;

// })(4, 5)


// var result = add(4, 5);
// console.log(add)



// (function subtract(b, c){

//     console.log(b - c);

//     return b - c;
// })(9, 4)


// (function subtract () {

//     console.log('Hello')
//     var x = "Hello!!";      // I will invoke myself
//   })();


// var a = 4;

// var b = 5;


// var c= a;

// c = 88

// console.log(a)

// console.log(c)


// myArrayOrig = [1, 2, 4, 6, 7];

// myArrayCopy = myArrayOrig;

// console.log(myArrayOrig)

// console.log(myArrayCopy)

// myArrayCopy[0] = 99;

// console.log(myArrayOrig)

// console.log(myArrayCopy)


// function testFunction(){

//     var hello = "hello"
// }


// console.log(hello)

// var a = 9;

// var b = 6;


// function add(){

//     var a = 5;

//     return a + b
// }

// console.log(add())


// "use strict";

// const x = 1;




// if (x == 1) {
//   let x = 2;
//   console.log("inside if ", x);
//   // expected output: 2
// }

// function test (){

//     var x = 3;

//     return 3;
// }

// test();


// console.log("outside function ", x);
// expected output: 1


// const index = 0;


// for(index; index < 10; index++){

//     console.log(index)

// }

// console.log("final value of index:", index)


// function myFunc(){
//     console.log("hello")

//     return "hello"
// }


// // let hello = myFunc();

// console.log(myFunc)


// var result = function (name){

//     return "what's up " +  name
// }


// console.log(result);
// console.log(result())
// let result = greeting("Kazim");

// console.log(result);



// let greeting = function (name){

//     return name;
// }


// console.log(greeting)


// let add = function(num1, num2){

//     return num1 + num2;
// }

// let subtract = function(num1, num2){
//     return num1 - num2;
// }


// let multiply = function(num1, num2){
//     return num1 * num2;
// }

// let calc = function(num1, num2, opFunction){

//     return opFunction(num1, num2);
// }


// let result = calc(3, 4, multiply)

// console.log(result);


let arr = [2, 5, 6, 8, 9, "shallah"];


let myBoolean = arr.some(function(num){

    return num == "shalla";
})

console.log(myBoolean)


// for (let index = 0; index < arr.length; index++){

//     console.log(arr[index])
// }

// arr.forEach(function(element){

//     console.log(element)
// })

// let arr = [45, 1, 23, -3, 4, -5]


// let newArr = arr.filter(function(arrElement){

//     return arrElement < 10;

// })

// console.log(newArr)

// let newArr = []

// for (let index = 0; index < arr.length; index++){

//     newArr.push(2 * arr[index]);
// }

// console.log(newArr)


// let newArr = arr.map(function(element){

//     return 2 * element;
// })

// console.log(newArr)

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];


let newCList = companies.filter(function(company){

    return company.category == "Retail";
})

// console.log(newCList)


const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// let newCompanyList = companies.map(function(company){

//     // console.log(company)
//     company["start"] = company.start - 5;

//     return company;
// })

// console.log(newCompanyList)


// for (let index = 0; index < companies.length; index++){
//     console.log(companies[index].name)
// }

// companies.forEach(function(company){

//     console.log(company.name)

// })













