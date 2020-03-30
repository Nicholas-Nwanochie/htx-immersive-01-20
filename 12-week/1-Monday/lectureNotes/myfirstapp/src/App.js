
import React, { Component } from 'react';
import Virus from './components/Virus';
import data from './data/virus';


class App extends Component {

  render() {
    //data = [{}, {}, {}]
    let newDataSet = data.map((cdc, index) => {

      return <Virus num={cdc.numViruses} country={cdc.country} key={index} />

    })
    return (
      <div>
        {newDataSet}
        {/* <Virus num="0" country="Greenland" /> */}
      </div>
    )

  }
}

export default App;

// function App(props) {

//   let newDataSet = data.map((cdcData) => {

//     return <Virus num={cdcData.numViruses} country={cdcData.country} />

//   })

//   return (
//     <div>

//       {newDataSet}

//     </div>
//   )
// }

// export default App;