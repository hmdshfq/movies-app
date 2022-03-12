import { useState, useEffect, React } from 'react';
import api from './api/swagger';
import uuid from 'react-uuid';
import styled from 'styled-components';

import SplashScreen from './components/SplashScreen';
import Nav from './components/Nav';
import MediaPlayer from './components/MediaPlayer';
import HomeScreen from './components/HomeScreen';
import Footer from './components/Footer';

const App = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [mediaId, setMediaId] = useState(null);

  const anonUser = {
    Device: {
      PlatformCode: 'WEB',
      Name: uuid(),
    },
  };

  useEffect(() => {
    api
      .post('/Authorization/SignIn', anonUser)
      .then(response => {
        setAccessToken(response.data.AuthorizationToken.Token);
        console.log('Signed in as anonymouse user')
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!accessToken) return <SplashScreen />;

  return (
    <Wrapper>
      <Nav setAccessToken={setAccessToken} />
      <main>
        <MediaPlayer token={accessToken} mediaId={mediaId} />
        <HomeScreen token={accessToken} setId={setMediaId} />
      </main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px;
  max-width: 1200px;
  margin: auto;
`;

export default App;
