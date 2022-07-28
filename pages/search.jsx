import React from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';

const search = () => {
  return (
    <Wrapper>
      {/* Button container */}
      <ButtonContainer>
        <Link href="/">
         <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
      </Link></ButtonContainer>
        
       
      {/*   Input continer*/}
      <InputContainer>
        <FormToIcons>
          <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />

          <Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />

          <Square src='https://img.icons8.com/windows/50/000000/square-full.png' />
        </FormToIcons>
        <InputBoxes>
          <Input placeholder='Enter Pickup Location' />

          <Input placeholder='Where to?' />
        </InputBoxes>
        <PlusIocn src='https://img.icons8.com/ios/50/000000/plus-math.png' />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png' />
        Save Places
      </SavedPlaces>

<Link href='/confirm'>
<ConfirmButtonContainer>Confirm Location</ConfirmButtonContainer></Link>
    </Wrapper>
  );
};

export default search;

const Wrapper = tw.div`
bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
bg-white px-4 
`;

const BackButton = tw.img`
h-12 cursor-pointer
`;

const FormToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`;

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`;

const Circle = tw.img`
h-2.5 
`;

const Line = tw.img`
h-10
`;

const Square = tw.img`
h-3
`;

const InputBoxes = tw.div`
flex flex-col flex-1
`;

const Input = tw.input`
h-10 bg-gray-200 my-2   rounded-2 p-2 outline-none border-none
`;

const PlusIocn = tw.img`
w-8 h-8  rounded-full bg-gray-200 ml-3 
`;

const SavedPlaces = tw.div`
flex  items-center bg-white px-4 py-2 text-md text-gray-500 font-semibold
`;

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;

const ConfirmButtonContainer = tw.div `
bg-black text-white  text-center mt-2 mx-3  py-2 rounded-sm text-xl font-base cursor-pointer

`