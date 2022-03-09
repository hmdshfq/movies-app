import { useState, useEffect, React } from 'react';
import api from './api/swagger';
import uuid from 'react-uuid';

import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';

const App = () => {
  const [accessData, setAccessData] = useState(null);
  let accessToken = '';
    const anonUser = {
        Device: {
            PlatformCode: 'WEB',
            Name: uuid(),
        },
    };

    useEffect(() => {
        api.post('/Authorization/SignIn', anonUser).then(response => {
            setAccessData(response.data);
        });
    }, []);
  
  if (!accessData) return (
    <SplashScreen />
  );
  else {
    accessToken = accessData.AuthorizationToken.Token;
    return <HomeScreen token={accessToken} />;
  }
};

export default App;
