import React,{Component} from 'react'
import ReactMapGL, {Marker,Popup} from "react-map-gl"
import pin from './pin.png'
import './App.css'
import ControlPanel from './control-panel'
import DeckGL from '@deck.gl/react';
import {PolygonLayer} from "deck.gl"
const districtData = require("../src/data/School_Board_District")


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      viewport: {
        width: '100vw',
        height: '100vh',
        latitude: 25.74233304264988,
        longitude: -80.25408198633106,
        zoom: 10
      },
      hospitals:[],
      selectedHospital:null,
      showHospitals:null
    };
    this.toggleShow = this.toggleShow.bind(this)
  }

  polygonData=[{
    contours:[districtData.features[1].geometry.coordinates[0]],
    name:"first polygon"
  }]
  LAYER_POLY = new PolygonLayer({
    id: "poly-layers",
    data:districtData.features[1].geometry.coordinates[0],
    stroked: true,
    filled: true,
    extruded: false,
    wireframe: true,
    lineWidthMinPixels: 1,
    getPolygon: d => d.contours,
    getLineColor: [80, 80, 80],
    getFillColor: [80, 80, 80],
    getLineWidth: 250
  })

  //function to toggle layer of pins from surgerycenters
  toggleShow() {
    this.setState({
      showHospitals: !this.state.showHospitals
    })
    console.log(districtData.features[2]);
  }

  //async await waits for fetch response and stores it in state
  async componentDidMount() {
    let response = await fetch('http://localhost:5000/surgerycenters')
    let myJson = await response.json()
    this.setState({hospitals:myJson, showHospitals:true})
  }

  render(){
    return (
      <div className="App">
        <ReactMapGL {...this.state.viewport}{...this.state.hospitals}
        mapboxApiAccessToken={"pk.eyJ1IjoiZWRpc29udG9vbGUiLCJhIjoiY2pncXdnajM2MGg2ejJ4cGUzdW92bDNzcCJ9.YG4_JLO78bqmlpBcLHzuWw"}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle = "mapbox://styles/edisontoole/cjzcqcbwh2eml1co2qsla3bbt"
        onClick={()=>{
          console.log("click")
          this.setState({selectedHospital:null})
        }}>
        {this.state.showHospitals ? (
          this.state.hospitals.map((hospital)=>(
            <Marker key={hospital.FacilID} latitude={parseFloat(hospital.latitude)} longitude={parseFloat(hospital.longitude)}>
            <button className="marker-btn" onClick={async(e) => {
              e.preventDefault()
              await this.setState({selectedHospital:hospital})
            }}>
              <img src={pin} alt={"-"} />
            </button>
            </Marker>
          ))
        ):null}



        {this.state.selectedHospital ? (
          <Popup
          latitude={parseFloat(this.state.selectedHospital.latitude)}
          longitude={parseFloat(this.state.selectedHospital.longitude)}
          onClose={()=>{this.setState({selectedHospital: null})}}>
            <h4>
            {this.state.selectedHospital.Name}
            </h4>
            <div>
            Address: {this.state.selectedHospital.address}
            </div>
            <div>
            Phone: {this.state.selectedHospital.phonenumber}
            </div>
            <div>
            Lat,lng: {this.state.selectedHospital.latitude},
            {this.state.selectedHospital.longitude}
            </div>
          </Popup>
        ):null}
        <ControlPanel
          showHospitals={this.state.showHospitals}
          toggleShow={this.toggleShow}
          onClick={()=>{
            console.log("clicked box")
          }}
          containerComponent={this.props.containerComponent}
        />
        </ReactMapGL>

      </div>
    )
  }
}

export default App;
