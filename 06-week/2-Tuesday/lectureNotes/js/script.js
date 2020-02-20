
$(() => {

    let i=0;
    let fullCharList = [];
    let flag = true;

    for(let p=1; p<=64;p++){
        
        $.get(`https://www.anapioficeandfire.com/api/characters?page=${p}&pageSize=50`)
        .done((characters)=>{
            
            fullCharList = [...fullCharList, ...characters]
           
        })
        .done(()=>{
            
                if (fullCharList.length >= 2130){

                    console.log(fullCharList);

                    let $listGroupContainer = $('.list-group');

                    let liTags = fullCharList.map((char)=>{

                        
                        return `<a class="list-group-item list-group-item-action" href="${char.url}">${char.name} <b>houses</b>: ${char.allegiances.length}</a>`
                    })

                    $listGroupContainer.html(liTags.join(''));
                }
            
        })
        .then(()=>{
            
        }) //end of promise
    } //end of loop

    let div = document.querySelector("div");

    div.addEventListener("click", (e)=>{

        e.preventDefault();

        $.get(e.target.href)
        .done((charObj)=>{
            let $modalBody = $('#modalBody');
            let $modalTitle = $(".modal-title");
            $modalTitle.html(charObj.name)
            $modalBody.html("");
           
            console.log(charObj.allegiances);

            if(charObj.allegiances.length > 0){
                //get the name of each house
                    charObj.allegiances.forEach((houseURL)=>{

                        $.get(houseURL)
                        .done((houseObj)=>{
                            console.log(houseObj.name);
                            $modalBody.html(`<br>${$modalBody.html()}<br>${houseObj.name}`)
                        })
                    })
            } //end of if statement

            $('#exampleModal').modal('show')

        })
    })

})


