
//jquery


///find form

let form = document.querySelector('.feedback-form');

//add event listner to dom element

form.addEventListener('submit', (e) => {
  
    e.preventDefault();

    // retrieve values from form

    let name = document.querySelector('#feedback-form-name');
    let title = document.querySelector('#feedback-form-title');
    let message = document.querySelector('#feedback-form-message');


    fetch('api/', {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: {
            "name": "Veronica",
            "title": "Some other stuff", 
            "message": "hello"
        }
    })
    .then((response)=>{
        return response.json();
    })
    .then((feedBackData)=>{

        console.log(feedbackData)
    })

})