import React, { Component } from 'react'

class SimpleDropDown extends Component {

    render() {

        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

        let options = days.map((day, index) => {
            return <option value={index} key={index}>{day}</option>
        }
        )

        return (
            <>
                <form action="">

                    <select name="" id="">
                        {options}
                        {/* <option value="0">Monday</option>
                        <option value="1">Tuesday</option>
                        <option value="2">Wednesday</option>
                        <option value="3">Thursday</option>
                        <option value="4">Friday</option>
                        <option value="5">Saturday</option>
                        <option value="6">Sunday</option> */}

                    </select>
                </form>
            </>
        )
    }
}

export default SimpleDropDown
