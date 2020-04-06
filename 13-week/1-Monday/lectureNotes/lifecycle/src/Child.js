import React, { Component } from 'react'

class Child extends Component {

    constructor(props) {
        super(props)

        this.state = {
            increasing: false
        }
    }

    componentWillReceiveProps(nextProps) {

        console.log("will receive props");

        console.log(`${this.props.val}`);

        console.log(`${nextProps.val}`);

        let increasing = nextProps.val > this.props.val;

        this.setState(
            {
                increasing: increasing
            }, () => {
                console.log("state of increasig:", this.state.increasing);
            })

    }

    shouldComponentUpdate(nextProps, nextState) {

        return (nextProps.val > 5)
    }

    render() {
        return (
            <>
                Child
                <br />
                {this.props.val}
            </>
        )
    }

    componentDidUpdate(prevProps, preState) {
        console.log(`componentDid Update prevProps: ${prevProps.val}`);
    }
}

export default Child
