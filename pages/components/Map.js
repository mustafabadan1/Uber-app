import { useEffect } from 'react';
import React from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

//  this is token from map box
mapboxgl.accessToken =
  'pk.eyJ1IjoibXVzdGFmYWJvYiIsImEiOiJjbDVtNjZteGswcXJuM2ltZzhxMDRzaTkxIn0.eFFFkhgX8zuzFKcWBuAsTA';

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/navigation-night-v1',
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }
// ? its basicly  sees if we have dropoff fill , so when the condision happen , it will return aa point in the map so u can see the marker , same thing for next "if". 
    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    // = "if" for zooming when the map is uploaded, and padding cus we need more space around the markers
    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates],
        {padding:100
        });
    }



  }, [props.dropoffCoordinates, props.pickupCoordinates]);

  // ?:- coordinates its (arg) handle value from pickupCoordinates that we were call it in props.pickupCoordantes , so wwhen u go to confirm.jsx u ll see it, in <Map> that is props sender ..

  const addToMap = (map, coordinates) => {
    // Create a default Marker and add it to the map.
    // =(marker) this is why u see the marker icons in the map.
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper  id='map'></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2
`;
