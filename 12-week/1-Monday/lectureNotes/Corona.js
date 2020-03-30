
function Corona(props) {

    props.myData.forEach(index => {
        console.log(index * 3);
    })

    return (

        <div>
            <div className="col s2">
                <div className="card hoverable small">
                    <div className="card-image">
                        <img src="http://lorempixel.com/400/400/nature/" />
                    </div>
                    <div className="card-content">
                        <p>{props.name}</p>
                        <p>Cornorna Virus PPE</p>
                        <p>N95 Masks</p>
                    </div>
                    <div className="card-action">
                        <a href="#">{props.price}</a>

                    </div>
                </div>
            </div>
        </div>

    )
}