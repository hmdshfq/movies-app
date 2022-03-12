import { useState, useEffect, React } from 'react';
import api from './api/swagger';
import uuid from 'react-uuid';
import styled from 'styled-components';

import SplashScreen from './components/SplashScreen';
import Nav from './components/Nav';
import MediaPlayer from './components/MediaPlayer';
import MediaLists from './components/MediaLists';
import Footer from './components/Footer';

const App = () => {
  /** State for saving access token for anonymous and registered user */
  const [accessToken, setAccessToken] = useState(null);
  /** State for media Id used to fetch media content */
  const [mediaId, setMediaId] = useState(null);
  /** State for anonymous and registered user */
  const [userType, setUserType] = useState('TRIAL');

  /** Authorization parameter for anonymous users */
  const anonUser = {
    Device: {
      PlatformCode: 'WEB',
      Name: uuid(),
    },
  };

  /** Fetch authorization token for anonymous user */
  useEffect(() => {
    api
      .post('/Authorization/SignIn', anonUser)
      .then(response => {
        setAccessToken(response.data.AuthorizationToken.Token);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  /** Set splash-screen while fetching authorization token */
  if (!accessToken) return <SplashScreen />;

  /** Show content after fetching authorization token */
  return (
    <Wrapper>
      {/* Component for showing logo and sign in button */}
      <Nav setAccessToken={setAccessToken} userType={userType} setUserType={setUserType} />
      <main>
        {/* Component for displaying media player */}
        <MediaPlayer
          token={accessToken}
          mediaId={mediaId}
          userType={userType}
        />
        {/* Component for showing media lists */}
        <MediaLists token={accessToken} setId={setMediaId} />
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
