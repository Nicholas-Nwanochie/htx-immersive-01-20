
let fullCharList = [];
$(()=>{


    for(let index = 1; index <= 50; index++){
        $.get(`https://www.anapioficeandfire.com/api/characters?page=${index}&pageSize=50`)
        .done((charList)=>{

            fullCharList = [...fullCharList, ...charList];

            // console.log(fullCharList);
        })
        .done(()=>{

            if (fullCharList.length >= 2130){
                //list out char. on html

                // console.log(fullCharList);

                //container that we want to append to
                let $listGroupContainer = $('.list-group');

                let liTags = fullCharList.map((char)=>{

                    return `<a class='list-group-item list-group-item-action' href="${char.url}">${char.name} <b>houses</b> ${char.allegiances.length}</a>`
                })

                $listGroupContainer.html(liTags.join(''))

            }

        })
    }// end of for loop


    //event listening

    $div = $(".list-group");

    $div.click((e)=>{

        e.preventDefault();
        console.log(e.target.href);

        $.get(e.target.href)
        .done((detailCharObj)=>{
            

            let $modalBody = $('#modalBody');
            let $modalTitle = $('#exampleModalLabel');
            $modalBody.html("");

            $modalTitle.html(detailCharObj.name)

            console.log(detailCharObj.allegiances.length);
            if(detailCharObj.allegiances.length > 0){
                
                detailCharObj.allegiances.forEach((houseURLAPI)=>{
                    
                    $.get(houseURLAPI)
                    .done((houseObj)=>{
                        console.log(houseObj.name);
                        $modalBody.html(`<br>${$modalBody.html()}<br>${houseObj.name}`)
                        
                    })


                })
            }// end of if statement

            $('#exampleModal').modal('show')
        })
    })


})