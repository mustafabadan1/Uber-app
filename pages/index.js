import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import Link from 'next/link';

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* header */}
        <Header>
          {/* logo  */}
          <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' />
          <Profile>
            <Name>Jhon Stewart</Name>
            <UserImage src='https://yt3.ggpht.com/ytc/AKedOLRIFoRe8O_t9k6blviCt6Xtg6JkID67uw-Z1jhDNw=s88-c-k-c0x00ffffff-no-rj' />
          </Profile>
        </Header>
        {/* this is link for next page wich is "search" */}
        <Link href='/search'>
          <ActionButtons>
            <ActionButton>
              <ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png' />
              Ride{' '}
            </ActionButton>

            <ActionButton>
              <ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png' />
              Wheels{' '}
            </ActionButton>

            <ActionButton>
              <ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png' />
              Reserve{' '}
            </ActionButton>
          </ActionButtons>
        </Link>

        {/* inputButton */}
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

// ! styling
const Wrapper = tw.div`
flex flex-col  h-screen
`;

const ActionItems = tw.div`
 flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center
`;

const UberLogo = tw.img`
h-20
`;

const Profile = tw.div`
flex items-center 
`;

const Name = tw.div`
mr-2 w-30 text-lg font-base
`;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px 
`;

const ActionButtons = tw.div`
flex 
`;

const ActionButton = tw.div`
flex flex-col  bg-gray-200 rounded-lg flex-1 m-1 p-1 h-32 items-center justify-center transform hover:scale-105 transition text-lg font-semibold
`;

const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
h-3 bg-gray-200 text-xl p-8 flex items-center mt-4  rounded-lg
`;

