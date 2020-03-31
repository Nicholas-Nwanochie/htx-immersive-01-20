import React, { Component } from 'react'

class SimpleList extends Component {


    render() {
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

        let formattedDays = days.map((day, index) => {
            return <>{day}<br /></>
        }
        )

        return (
            <>


                {/* 3. List with breaks */}
                {formattedDays}
                {/* 2. List but no breaks */}

                {/* {days} */}

                {/* Start Here */}
                {/* Monday <br />
                Tuesday <br />
                Wednesday <br />
                Thursday <br />
                Friday <br />
                Saturday<br />
                Sunday <br /> */}


            </>
        )
    }
}

export default SimpleList
