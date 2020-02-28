
let log = {
    info: (info) => {
        console.log(`info is: ${info}`)
    },
    warning: (warning) => {
        console.log(`Warning ${warning}`)
    },
    error: (error)=>{
        console.log(`Error: ${error}`);
    }
}

let digitalCraft = "school"

module.exports = log;


