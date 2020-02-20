

// let array1 = [1, 2, 4, 5]

// let array2 = [4, 8, 4, 0];


// let combineArray = [];

// combineArray = [...array1];

// combineArray = [...combineArray,...array2]

// console.log(combineArray);


console.log("comment 1");

fetch("https://www.anapioficeandfire.com/api/characters")
.then((response)=>{

    return response.json()
})
.then((obj)=>{

    console.log("comment 2");
})


console.log("comment 3");



let myDiv = document.querySelectorAll('.column');

myDiv.addEventListner('click', (e)=>{

    e.preventDefault();

    switch(e.target.id){
        case "":
            break;
        default:
            break;
    }

})