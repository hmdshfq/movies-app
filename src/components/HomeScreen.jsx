import { useState, useEffect, React } from 'react';
import api from '../api/swagger';
import styled from 'styled-components';
import SplashScreen from './SplashScreen';
import MoviesList from './MoviesList';

const HomeScreen = ({ token }) => {
    const [media, setMedia] = useState(null);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const bodyParams = {
        MediaListId: 2,
        IncludeCategories: false,
        IncludeImages: true,
        IncludeMedia: false,
        PageNumber: 1,
        PageSize: 15,
    };

    useEffect(() => {
        api.post('/Media/GetMediaList', bodyParams, config).then(response => {
            setMedia(response.data);
        });
    }, []);

    if (!media) return <SplashScreen />;
    else {
        return <Wrapper>
            <h1>Swagger Flix</h1>
            <MoviesList media={ media.Entities }/>
        </Wrapper>;
    }
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export default HomeScreen;
