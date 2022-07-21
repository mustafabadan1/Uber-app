import React from 'react';
import tw from 'tailwind-styled-components';

const search = () => {
  return (
    <Wrapper>
      {/* Button container */}
      <ButtonContainer>
        <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
      </ButtonContainer>
      {/*   Input continer*/}
      <InputContainer>
        <FormToIcons>
          <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />

          <Line
            src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png'

          />

          <Square src='https://img.icons8.com/windows/50/000000/square-full.png' />
        </FormToIcons>
        <InputBoxes>
        <Input placeholder = "Enter Pickup Location"/>

        <Input placeholder = "Wher to?"/>
        </InputBoxes>
      </InputContainer>
      {/* Saved places */}
      {/* confirm location */}
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
h-12 
`;

const FormToIcons = tw.div`
w-10 flex flex-col
`;

const InputContainer = tw.div`
bg-white
`;

const Circle = tw.img`

`;

const Line = tw.img`

`;

const Square = tw.img`

`;


const InputBoxes = tw.div`

`;


const Input = tw.div`

`;
