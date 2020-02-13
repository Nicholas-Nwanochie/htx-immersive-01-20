// console.log(x); 


// var x = 'hi';


// var a = 3;


// if (true){

//     let a = 4;

//     console.log(a);
// }


// console.log(a);


// let i = 0;

// for( let i = 0; i< 10; i++){

//     console.log(i);
// }

// console.log("outside ", i);


// const pi = 3.14;


// pi = 4;


// const obj = {};


// obj["newKey"] = 4;


// console.log(obj);

// let index = 8;

// // let mySringES5 = "hello world" + index.toString();

// let myString = `hello world  index ${index}`;

// console.log(myString);

// const name = 'Tiger';
// const age = 13;

// console.log(`My cat's name is ${name} and his age is ${age}`);




// let today = new Date();

// let a = 4;
// let b = 5;


// console.log(today.toDateString());

// console.log(`Today's date is: ${a + b}`);


// let myArray = [4, "hello", 3, 2, "hello"];

// // let [a, b, c, d, e] = [4, 7, 3, 2, 1];

// let [a, b, c, d, e, f] = myArray;

// console.log(a);

// console.log(b);

// console.log(c); 

// console.log(f);

// let a = myArray[0]; //4

// let b = myArray[1]; //7

// let c = myArray[2]; //3


// let luke = { occupation: 'jedi', father: 'anakin' };

// // let {occupation, father} = { occupation: 'jedi', father: 'anakin' };

// let {occupation, father} = luke;

// console.log(occupation);

// console.log(father);
// let occupation = luke["occupation"];

// let father = luke.father;


// let helloWorld = ()=>{
//     console.log("Hello world");
// }

// let myFunction = ()=>{
//     console.log("new function");
// }

// let add = (a, b) => {
  
//     return a + b;
// }


// console.log(add(4, 5));


// helloWorld();

// myFunction();


// setTimeout(function(){

//     console.log("hello world");
// }, 1000)



// function getType() {
//     console.log('Type is: ' + this.type);
// }



// console.log(getType());


// let nums = [5, 7, 3, 4, 9];



// let newArray = nums.map((num)=>{

//     return num * 2
// })

// console.log(nums);
// console.log(newArray);

// let obj = {
//     x: 5,
//     y: 20,
//     z: 3
// }


// //create a function called multiply  5 * 20 * 3

// let multiply = (object)=> {

//     let {x, y, z} = object;
    
//     return x * y * z;
// }

// console.log(multiply(obj));


// let div = document.getElementById('myId');

// div.addEventListener('click', (e)=>{

    
// })

//es 5
// let addTwoNumbers = (a, b)=>{

//     a = a || 0;
//     b = b || 0;

//     return a + b;

// }


// let result = addTwoNumbers(2)

// console.log(result);


//es 6

// let addTwoNumbers = (a=0, b=0)=>{

//     console.log(`the value of b: ${b}`);
//     return a + b;
// }

// console.log(addTwoNumbers(3, 5));

// console.log(addTwoNumbers(3));

// console.log(addTwoNumbers())


// let multiplyNums = ()=>{

//     for(let i = 0; i<= arguments.length; i++){
//         console.log(arguments[i]);
//     }


// }


// let multiplyNums = (...args)=>{


//     let m = 1;

//     for (let i of args){
//         m = m * i;
//     }

//     console.log(m);

// }

// multiplyNums(4, 6, 7)



// let array1 = [5, 7, 8, 4, 3]

// let array2 = [...array1]

// array2.push(5);

// array2.push(7);
// console.log(array1);
// console.log(array2);

// let a, b, c, d, arr;

// a = [1,2];

// b = [3, 4];

// c = [5,6];

// arr = [0, ...a, ...b, ...c, 7, 8];

// console.log(arr);


//Swap value


// let a, b;

// a = "first";
// b = "second";


// [b,a] = [a,b]

// console.log(a);
// console.log(b);


// let a = 4;


// if (a == 4){
//     console.log(`a is equal to 4`);
// }
// else {
//     console.log(`a is not equal to 4`);
// }

//(condition)? (true block): (else block)


// (a ==4 )? console.log(`a is equal to 4`) : console.log(`a is not equal to 4`);

//(condition) ? (true block) : (false block);


// class Parent { 
     
//     parentGreeting(){

//         console.log("I'm the parent");
//     }

// }

// class Person extends Parent {

//     constructor(firstName, lastName, age){
//         super();
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.count = 0;


//     }

    
//     greeting = () =>{

//         console.log(`Hello ${this.firstName} ${this.lastName}!`)

        
//         this.count = this.count + 1;
//     }

//     printCount = () =>{

//         console.log(this.count);
//     }
    

// }


// let alina = new Person("alina", "belova", 21);

// console.log(alina.firstName);

// alina.greeting();
// alina.greeting();
// alina.greeting();

// alina.printCount();


// alina.parentGreeting();


// class Character{

//     constructor(health, power){
//         this.health = health;
//         this.power = power;
//     }

//     attack = (enemy) => {
      
//         enemy.health -= this.power;
//     }

//     print = ()=>{

//         console.log(`The health of ${this.name} is ${this.health} and power is ${this.power}`);
//     }
    
// }

// class Hero extends Character{

//     constructor(health, power){
//         super(health, power);
//         this.name = "hero";
        
//     }
// }


// class Goblin extends Character{
//     constructor(health, power){
//         super(health, power);
//         this.name = "goblin";
        
//     }
// }

// let hero = new Hero(10, 4);
// let goblin = new Goblin(8, 5);


// hero.attack(goblin);


// hero.print();
// goblin.print();


class Todos{

    constructor(description){
        this.description = description;
    }
}


class TodosManager{

    constructor(){

        this.todoArray = []
    }

    addTodo = (descripton) => {

        let todo = new Todos(description);

        this.todoArray.push(todo);
      
    }

    displayTodos = () =>{

        //DOM logic to display todos on page
    }
    
}


let manger = new TodosManager();

manger.addTodo(description)

