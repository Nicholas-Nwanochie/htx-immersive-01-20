import React, { Component } from 'react'

class UList extends Component {
    render() {
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

        let listItems = days.map((day, index) => {
            return <li key={index}>{day}</li>
        })

        return (
            <ul>
                {listItems}
                {/* <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
                <li>Sunday</li> */}
            </ul>
        )
    }
}

export default UList
