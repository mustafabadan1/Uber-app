import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
// ? "signInWithPopup" its is nice google popup that allows you to click your emial and log in
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
// ? "provider" for google provider
import { auth, provider } from '../firebase';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // ? if the user is exist then send me to =>home page
      if (user) {
        router.push('/');
      }
    });
  }, []);

  return (
    <Wrapper>
      <UberLogo src='https://i.ibb.co/ZMhy8ws/uber-logo.png' />
      <Title>Log in to access your account</Title>
      <HeadImage src='https://i.ibb.co/CsV9RYZ/login-image.png' />
      {/*  "auth" so when you click the button it will show u the sign in from firebase  */}
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-4
`;
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full text-xl 
`;

const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`;

const Title = tw.div`
text-5xl pt-2 text-gray-500
`;

const HeadImage = tw.img`
object-contain w-full
`;
