import React from 'react';
import styled from 'styled-components';
import { RotateCw } from 'react-feather';

const SplashScreen = () => {
    return (
        <BackgroundWrapper>
            <AnimateRotate>
                <RotateCw size={96} />
            </AnimateRotate>
            <LoadingText>Loading Swagger Flix</LoadingText>
        </BackgroundWrapper>
    );
};

const BackgroundWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background: var(--gray-100);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const AnimateRotate = styled.div`
    animation: rotate 1s infinite both;
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const LoadingText = styled.h1`
    margin-top: 1em;
`;

export default SplashScreen;
