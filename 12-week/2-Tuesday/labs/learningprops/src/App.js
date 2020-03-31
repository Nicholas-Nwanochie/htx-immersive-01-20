import React, { Component } from 'react'
// import Exercise1 from './components/Exercise1'
import Calculator from './components/calculator/Calculator'
import DropDown from './components/DropDown'
import SimpleDropDown from './components/SimpleDropDown'
import { Column, Row, Col, Container } from 'react-bootstrap';
import SimpleList from './components/SimpleList';
import UList from './components/UList';
import Cards from './components/cards/Cards';
import Comments from './components/comments/Comments'
import Parent from './components/nestedBoxes/Parent'

let dropDownData = ["January", "February", "March", "April", "May", "June", "July", "August"]
class App extends Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={{ span: 6, offset: 4 }} >
            <br />
            <br />
            <br />
            {/* <Exercise1 /> */}
            <Calculator />

            {/* <DropDown months={dropDownData} /> */}

            {/* <SimpleDropDown /> */}


            {/* <SimpleList /> */}

            {/* <UList /> */}

            {/* <Comments /> */}

            {/* <Parent /> */}
          </Col>
        </Row>

        {/* <Cards /> */}
      </Container>
    )
  }
}

export default App
