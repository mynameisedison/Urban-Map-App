import React,{Component} from 'react';
import ReactMapGL, {Marker} from "react-map-gl";
import * as hospitalData from "./Ambulatory_Surgical_Center.json";
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      viewport: {
        width: '100vw',
        height: '100vh',
        latitude: hospitalData.features[0].geometry.coordinates[1],
        longitude: hospitalData.features[0].geometry.coordinates[0],
        zoom: 10
      },
      hospitals:[]
    };
  }


  async componentDidMount() {
    // fetch(`http://localhost:5000/surgerycenters`)
    //   .then(res => res.json())
    //   .then((data)=>{
    //     this.setState({hospitals:data})
    //   })
    let response = await fetch('http://localhost:5000/surgerycenters')
    let myJson = await response.json() //extract JSON from the http response
    this.setState({hospitals:myJson})
  }

  render(){
    return (
      <div className="App">
        <ReactMapGL {...this.state.viewport}{...this.state.hospitals}
        mapboxApiAccessToken={"pk.eyJ1IjoiZWRpc29udG9vbGUiLCJhIjoiY2pncXdnajM2MGg2ejJ4cGUzdW92bDNzcCJ9.YG4_JLO78bqmlpBcLHzuWw"}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle = "mapbox://styles/edisontoole/cjzcqcbwh2eml1co2qsla3bbt"
        onClick={(e)=>{console.log(this.state.hospitals[0].latitude)}}>
        {this.state.hospitals.map((hospital)=>(
          <Marker key={hospital.FacilID} latitude={parseFloat(hospital.latitude)} longitude={parseFloat(hospital.longitude)}>
          <button onClick={(e) => {
            e.preventDefault()
            console.log(hospital.FacilID)
          }}>
           "hospital!"
          </button>
          </Marker>
        ))}
        </ReactMapGL>
      </div>
    )
}
}

export default App;
