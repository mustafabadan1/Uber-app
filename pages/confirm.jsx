import { useEffect, useState } from 'react';
import Map from './components/Map';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector';

const Confirm = () => {
  // = router title , so when u typing input , it will shows in the next page wich is confirm.jsx
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  // =: Use State
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  //= 1-pickup
  const getPickupCoordinates = (pickup) => {
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
  const getDropoffCoordinates = (dropoff) => {
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
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>
             Confirm Uberx
             
          </ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
      
    </Wrapper>
  
  );
};

export default Confirm;

// ! :- styling
const Wrapper = tw.div`
flex h-screen flex-col `;

const RideContainer = tw.div`
flex flex-1 justify-between h-1/2 flex-col`;

const ConfirmButtonContainer = tw.div`
border-t-2
`;

const ConfirmButton = tw.div`bg-black text-white my-4 m-4 py-4 text-center text-xl `;
