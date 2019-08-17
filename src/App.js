import React,{Component} from 'react';
import ReactMapGL, {Marker} from "react-map-gl";
import * as parkData from "./skateboard-parks.json";
import './App.css';

class App extends Component {
  state = {
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 30.331528,
      longitude: -81.661377,
      zoom: 10
    }
  };
  render(){
    console.log(parkData.features[0].geometry.coordinates[0]);
    return (
      <div className="App">
        <ReactMapGL {...this.state.viewport}
        mapboxApiAccessToken={"pk.eyJ1IjoiZWRpc29udG9vbGUiLCJhIjoiY2pncXdnajM2MGg2ejJ4cGUzdW92bDNzcCJ9.YG4_JLO78bqmlpBcLHzuWw"}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle = "mapbox://styles/edisontoole/cjzcqcbwh2eml1co2qsla3bbt">
        {parkData.features.forEach((park)=>(
          <Marker key={park.properties.PARK_ID} latitude={park.geometry.coordinates[1]} longitude={park.geometry.coordinates[0]}>
          <button>
            <img src="./logo192.png" alt="Skateboard"/>
          </button>
          </Marker>
        ))}
        </ReactMapGL>
      </div>
    );
}
}

export default App;
