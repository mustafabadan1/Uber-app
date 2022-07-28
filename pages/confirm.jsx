import {useEffect} from 'react';
import Map from './components/Map';
import tw from 'tailwind-styled-components';

const Confirm = () => {

    
    const getCoordinates = () => {
      const location = 'Santa Monica';

      fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json` + new URLSearchParams({
        access_token
      }))
      .then (response => response.json())
      .then (data=>{console.log(data)})
    };


    useEffect(()=>{

      getCoordinates();

    },[]) 

  return (
    <Wrapper>
      <Map />
      <RideContainer>Ride selector confirm button</RideContainer>
    </Wrapper>
  );
};
export default Confirm;


// ! styling
const Wrapper = tw.div`
flex h-screen flex-col`;

const RideContainer = tw.div`
flex-1`;
