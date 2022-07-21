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

      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });
  {
    /* the id='map' meanning what should i put the map? , so its remine to map positions ,and u should type 'map' also in container of use effect    */
  }
  return <Wrapper id='map'>Map</Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
