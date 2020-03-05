/* 1
    Change the text of the button to "Please click me!". Putting your code in the document ready block is important.
    */
   $(document).ready(function () {
    // Put your code here
    $('#the-button').text("Please click me!")
  });


/* 2
    When the button is clicked, print "You clicked!" to the console. */
    $(document).ready(function () {
        // Put your code here
        $("#the-button").click(() => {
          console.log("You clicked!")
        });
      });

/* 3
    When the button is clicked, change the text of the paragraph #the-message to "You clicked me!", and the text of the button #the-button to "Click again?".
    */
   $(document).ready(function () {
    $('#the-button').click(function () { 
      $('#the-message').text("You clicked me!");
      $('#the-button').text("Click again?");        
    })
  }); 

  /* 4
        When the clear button is clicked, clear the text field.
        When the save button is clicked, take the text value inside the text field, and append a new <li> element to the #log with the entered text value.
        HINT: lookup .val()
        */
       $(document).ready(function () {
        // write your code here
        $("#clear-button").click(function () {
          $('#text-field').val('');
        });
        $('#save-button').click(function () {
            let $message = $('#text-field').val();
            let $newLi = $("<li>", {
              'text': $message
            });
            $("#log").append($newLi);
        }); 
        });
/* 5
    Make it so that when you click on one of the links on this page,
    instead of navigating the browser to that page, it renders that
    page in the iframe below. Set the iframe's `src` attribute to a URL will cause it to render the page.
    HINT: Lookup .attr()
    */
   $(document).ready(function () {
    // Write code here
    $('a').click(function (e) {
      e.preventDefault();
      let $url = $(e.target).attr('href');
      $('#iframe').attr('src', $url);
    });
  });

  /* 6
    When the section header is clicked, hide the section.
    When it's clicked again, make the section show.
    (Make it toggle back and forth between hidden and show)
    */
//    $(document).ready(function () {
//     $("#section-header").click(function () { 
//       $("#section").toggle();
//     });
//   });
//   </script>

//   <style>
//   #section-header {
//     background-color: blue;
//     color: white;
//     padding: 5px;
//   }
//   #accordion {
//     width: 400px;
//     background-color: yellow;
//     margin: auto;
//   }
//   #section {
//     padding: 5px;
//   }
//   </style>
// </head>
// <body>
//   <div id="accordion">
//     <h3 id="section-header">Section 1</h3>
//     <div id="section">
//       <p>
//       Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
//       ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
//       amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
//       odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
//       </p>
//     </div>
//   </div>

{/* 7
<style>
        .line {
          text-decoration: line-through;
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script>
    /* doubleclick to remove event
    4. the ability to edit an existing task
    */
    $(document).ready(function () {
      $("#add-button").click(function () { 
        let $task = $("#description").val();
        let $newLi = $("<li>")
        $newLi.html("<input type='checkbox'>" + $task + '<button id="#edit">edit</button>');
        $('#todo-list').append($newLi);
      });

      $("#rem-button").click(function (e) { 
        $("#description").val("");
        
      });

      $("ul").on("click", "[type='checkbox']", function (e) { 
        $(e.target.parentNode).toggleClass('line');
      })

      $("ul").on("dblclick", "li", function (e) { 
        $(e.target).remove();
      })

      $(".edit").on("click", function (e) {
        let $newText = prompt("Enter new text:");
        $(e.target.parentNode).html("<input type='checkbox'>" + $newText + '<button id="#edit">edit</button>');
        // console.log(e.target.parentNode);
      });
    });
    </script>

    <style>
    #wrapper {
      max-width: 480px;
      margin: auto;
    }

    #description, #search, #todo-list {
      font-size: 1.5em;
      list-style-type: none;
    }

    </style>
  </head>
  <body>
    <div id="wrapper">
      <input id="description" type="text" name="description">
      <button id="add-button">Add Task</button>
      <button id="rem-button" style="background-color: red">X</button>
      <ul id="todo-list">
        <li><input type='checkbox'>Feed the cat<button class="edit">edit</button></li>
      </ul>
    </div> */}