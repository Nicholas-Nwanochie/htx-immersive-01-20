
import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'

class DropDown extends Component {

    constructor(props) {
        super(props)

    }



    render() {

        console.log(this.props.months);
        let options = this.props.months.map((month, index) => {
            return <Dropdown.Item key={index} href="#/action-1">{month}</Dropdown.Item>
        })
        return (

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                            </Dropdown.Toggle>

                <Dropdown.Menu>
                    {options}
                    {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                </Dropdown.Menu>
            </Dropdown>

        )
    }
}

export default DropDown
