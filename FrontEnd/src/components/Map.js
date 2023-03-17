import {GoogleMap, InfoWindow, Marker} from "@react-google-maps/api";
import { useState } from "react";
// import CustomMarker from "../assets/markerIcon.png";
import DonorMarker from "../assets/green-dot.png";
import RecieverMarker from "../assets/red-dot.png";
import "./Map.css";

const Map = (props) => {
  const {isLoaded}=props;
  const [selectedMarker,setSelectedMarker]=useState("");
  const containerStyle = {
    width: '98.75vw',
    height: '90vh'
  };
  const center = {
    lat: 33.738045,
    lng: 73.084488
  };
  const markers=[ {
    name:"location-1",
    status:"donor",
    location:{
    lat:33.6672,
    lng:73.1541 }
    },
    {
      name:"location-2",
      status:"reciever",
      location:{
      lat:33.6844,
      lng:73.1615  }
    },
    {
      name:"location-3",
      status:"donor",
      location:{
      lat:33.7450,
      lng:73.1763 }
    },
    {
      name:"location-4",
      status:"recipient",
      location:{
      lat:33.4951,
      lng:73.6117 }
    },
    {
      name:"location-5",
      status:"recipient",
      location:{
      lat:33.7463,
      lng:72.8397 }
    },
    {
      name:"location-6",
      status:"donor",
      location:{
      lat:33.9070,
      lng:73.3943 }
      },
      {
        name:"location-7",
        status:"reciever",
        location:{
        lat:33.6844,
        lng:73.1615  }
      },
      {
        name:"location-8",
        status:"donor",
        location:{
        lat:33.7450,
        lng:73.3886 }
      },
      {
        name:"location-9",
        status:"recipient",
        location:{
        lat:31.2781,
        lng:72.3317 }
      },
      {
        name:"location-10",
        status:"recipient",
        location:{
        lat:33.7660,
        lng:72.3609 }
      },
   ]
    return (
      isLoaded && (
       <>
       {/* <h1>Map</h1> */}
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} 
        // options={{mapTypeControl:false,
        // fullscreenControl:false,
        // fullViewControl:false,
        // ZoomControl: false,
        // disableDefaultUI:true,
        // draggable:true,
        // navigationControl:false
        // }}
        >
          {markers.map((marker)=>{
          return(<div key={marker.name}>
          <Marker position={marker.location} options={{
          icon:marker.status==="donor"?DonorMarker:RecieverMarker
          }}
          onClick={()=>{
            setSelectedMarker(marker); }}
        />
    </div>);
    })}
    {selectedMarker && <InfoWindow position={selectedMarker.location}>
    <div>
      <h1>location name: {selectedMarker.name}</h1>
      <h1>status:  {selectedMarker.status}</h1>
      <button onClick={()=> setSelectedMarker("")}>Close</button>
    </div>
    
    </InfoWindow>}
    </GoogleMap>
    </> ));
}
export default Map;