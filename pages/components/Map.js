import { useEffect } from 'react';
import React from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

//  this is token from map box
mapboxgl.accessToken =
  'pk.eyJ1IjoibXVzdGFmYWJvYiIsImEiOiJjbDVtNjZteGswcXJuM2ltZzhxMDRzaTkxIn0.eFFFkhgX8zuzFKcWBuAsTA';

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',

      style: 'mapbox://styles/mapbox/navigation-night-v1',
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });


  const addToMap = (map) => {
    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker()
      .setLngLat([12.554729, 55.70651])
      .addTo(map);
  };

  return <Wrapper id='map'></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
