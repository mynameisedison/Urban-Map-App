import React,{Component} from 'react';
import ReactMapGL, {Marker} from "react-map-gl";
import * as parkData from "./skateboard-parks.json";
import * as hospitalData from "./Ambulatory_Surgical_Center.json";
import './App.css';

class App extends Component {
  state = {
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: hospitalData.features[0].geometry.coordinates[1],
      longitude: hospitalData.features[0].geometry.coordinates[0],
      zoom: 10
    }
  };
  render(){
    return (
      <div className="App">
        <ReactMapGL {...this.state.viewport}
        mapboxApiAccessToken={"pk.eyJ1IjoiZWRpc29udG9vbGUiLCJhIjoiY2pncXdnajM2MGg2ejJ4cGUzdW92bDNzcCJ9.YG4_JLO78bqmlpBcLHzuWw"}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle = "mapbox://styles/edisontoole/cjzcqcbwh2eml1co2qsla3bbt">
        {hospitalData.features.map((hospital)=>(
          <Marker key={hospital.properties.FACILID} latitude={hospital.geometry.coordinates[1]} longitude={hospital.geometry.coordinates[0]}>
          <button onClick={(e) => {e.preventDefault();
            console.log(hospital.properties.FACILID)}}>
           {hospital.properties.NAME}
          </button>
          </Marker>
        ))}
        </ReactMapGL>
      </div>
    );
}
}

export default App;
