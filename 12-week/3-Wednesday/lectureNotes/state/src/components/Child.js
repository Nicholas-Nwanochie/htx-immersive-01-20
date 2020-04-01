import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            txt: 'this is a text value',
            num1: 3,
            num2: 4
        }

        // setTimeout(() => {

        //     //set state with function setState
        //     this.setState({ txt: "Hello World" })

        // }, 5000)
    }

    handleUpdate = () => {

        console.log('button was clicked');

        // this.setState({ txt: "hello world" })

        this.setState({
            num1: this.state.num1 + 1,
            num2: this.state.num2 * this.state.num1
        })

    }


    render() {

        //DON'T DO THIS -- IT"S HORRIBLY BAD
        //this.state.num1 = 5
        return (
            <>
                <h1>{this.state.txt}</h1>

                <h2>{this.state.num1} + {this.state.num2} =
                {this.state.num1 + this.state.num2}</h2>

                <br />

                <button onClick={this.handleUpdate}>Click Me</button>
            </>
        );
    }
}


// Child.propTypes = {
//     txt: PropTypes.string,
//     integer: PropTypes.number,
//     integer: PropTypes.number.isRequired
// };

export default Child
