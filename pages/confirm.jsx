import { useEffect, useState } from 'react';
import Map from './components/Map';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector';
import Link from 'next/link'


const Confirm = () => {
  // = router title , so when u typing input , it will shows in the next page wich is confirm.jsx
  const router = useRouter();

  const { pickup, dropoff } = router.query;

  // =: Use State
  const [pickupCoordinates, setPickupCoordinates] = useState([0,0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0]);

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
      .then(response => response.json())
      .then(data => {
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
      .then(response => response.json())
      .then(data => {
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
      <ButtonContainer>
        <Link href='/search'>
          <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      {/* Benjamin */}
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  )
}

export default Confirm

// ! styling
const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const ConfirmButtonContainer = tw.div`
border-t-2
`


const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`


const Wrapper = tw.div`
flex h-screen flex-col
`
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img`
h-full object-contain
`