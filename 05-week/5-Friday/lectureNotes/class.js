

// let myObj = {};

// myObj.name = 4;


// myObj1 = {}


// let myString = "Veronica";

// let myString1 = new String("Veronica")

//function constructor
function Course (title, instructor, campus){
    this.title = title;
    this.instructor = instructor;
    this.campus = campus;
}


let janCohort = new Course("immersive bootcamp", "Veronica", "Houston");
let janCohort2 = new Course("immersive bootcamp", "Sean", "Atlanta");


delete janCohort["title"];

console.log(janCohort);


// let classes = [];

// classes.push(janCohort);
// classes.push(janCohort2);


// let classes = [
//     new Course("immersive", "Veronica", "Houston"),
//     new Course("immerse", "Veronica", "Houston")
// ]


// let obj1 = {
//     title1: "immersive bootcamp",
//     instructor: "Veronica",
//     campus = "Houston"
// }


// let obj2 = {
//     title: "immerse" 
// }

// ob1.title



let X = function(j){

    this.i = 0;
    this.j = j;

    
}

X.prototype.getJ = function(){
    return this.j
}


x1 = new X(1);

x1.i
x1.j

x1.getJ();

// x2 = newX(2);