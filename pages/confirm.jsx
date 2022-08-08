import { useEffect, useState } from 'react';
import Map from './components/Map';
import tw from 'tailwind-styled-components';

const Confirm = () => {
  // =: Use State
  const [pickupCoordinates, setPickupCoordinates] = useState();

  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  //= 1-pickup
  const getPickupCoordinates = () => {
    const pickup = 'Santa Monica';

    //? :- we add "?" quistion mark at the end of fetch url , so it means that the "?" for access token so , its important to add it to url link , dont forget that , neverrr everrrr!
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoibXVzdGFmYWJvYiIsImEiOiJjbDVtNjZteGswcXJuM2ltZzhxMDRzaTkxIn0.eFFFkhgX8zuzFKcWBuAsTA',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  //= 2-drop-off
  const getDropoffCoordinates = () => {
    const dropoff = 'los angles';
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoibXVzdGFmYWJvYiIsImEiOiJjbDVtNjZteGswcXJuM2ltZzhxMDRzaTkxIn0.eFFFkhgX8zuzFKcWBuAsTA',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };
  // =: use effect for calling functions
  //  dont forget "()" when you want to recall a function
  useEffect(() => {
    getPickupCoordinates();
    getDropoffCoordinates();
  }, []);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>Ride selector confirm button</RideContainer>
    </Wrapper>
  );
};

export default Confirm;

// ! :- styling
const Wrapper = tw.div`
flex h-screen flex-col`;

const RideContainer = tw.div`
flex-1`;
