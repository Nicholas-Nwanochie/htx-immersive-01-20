
// console.log(x);

// let x = "hi";

// var snack = 'Meow Mix';

// function getFood(food) {
//     if (food) {
//         var snack = 'Friskies';
//         return snack;
//     }
//     return snack;
// }

// console.log(getFood(false));

// function getType() {
//     console.log('Type is: ' + this.type);
// }

// var CRV = {
//     type: 'SUV',
//     getType: getType
//   };

//   getType();
//   CRV.getType();

// function getType() { // doesn't work
//   setTimeout(function () {
//     console.log('Type is: ' + this.type);
//   }, 500);
// }

// function selfGetType() {
//     var self = this;
//     setTimeout(function() {
//       console.log('Type is: ' + self.type);
//     }, 500);
//   }

//   var CRV = {
//     type: 'SUV',
//     getType: getType,
//     selfGetType: selfGetType
//   };

//   CRV.getType();
//   CRV.selfGetType();


// function logArguments() {
//     for (var i=0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
//   }


// function logArguments(...args) {
//     for (let arg of args) {
//         console.log(arg);
//     }
//   }

// logArguments(1, 2, 6, 4, 3, 2);


// function varTest() {
//     var x = 31;
//     if (true) {
//       var x = 71;  // same variable!
//       console.log(x);  // 71
//     }
//     console.log(x);  // 71
// }

// function letTest() {
//     let x = 31;
//     if (true) {
//       let x = 71;  // different variable
//       console.log(x);  // 71
//     }
//     console.log(x);  // 31
//   }


// let result = /e/g.exec("The best things in life are free!");

// console.log(result);

// let matchPattern = /e/g;
// let matchStr = "The best things in life are free!";

// let matchArray = matchStr.match(matchPattern);

// console.log(matchArray);


// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// const regex = /dog/gi;

// console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

//console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?""


// let regex = /Batwowowo*woman/gi;
// let myString = "The quick brown Batwowowooooowoman fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?";
// console.log(myString.match(regex));


// let regex = /Bat(wo){2,}man/gi;
// let myString = "The quick brown Batwowowowowoman fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?";
// console.log(myString.match(regex));


// let pattern = /Batman|Tina Fey/gi;
// let str = "Batman and Tina Fey.";


// // let result = pattern.exec(str);
// //or
// let result = str.match(pattern);

// console.log(result);


// let pattern = /Bat(wo)+man/;

// let str1 = "The Adventures of Batman";
// let str2 = "The Adventures of Batwoman";
// let str3 = "The Adventures of Batwowowowoman";

// let result = str1.match(pattern);
// // let result = str2.match(pattern);
// // let result = str3.match(pattern);

// console.log(result);


function giveMeEms(pixels){
    var baseValue = 16;
    function doTheMath(){
        return pixels/baseValue;
    }
    return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xLargeSize = giveMeEms(32);

console.log("small size: ", smallSize());
console.log("medium size: ", mediumSize());
console.log("large size: ", largeSize());
console.log("xLarge size: ", xLargeSize());

