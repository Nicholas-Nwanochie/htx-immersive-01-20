import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from './CardStyle';

class Cards extends Component {
    render() {
        return (
            <Row>

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </Row>
        )
    }
}

export default Cards
