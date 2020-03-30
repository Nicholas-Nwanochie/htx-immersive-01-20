

//create a component
//return JSX h1 tag Your name and your h2 city
//h1 tag = name 
//h2 tag for city
//import component into main html file (basicReact.html)
//Display that component 

function Name(props) {

    return (
        <div>
            <h1>{props.name ? props.name : "No name given"}</h1>
            <h2>Houston</h2>
        </div>
    )
}