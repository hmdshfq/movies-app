import React from 'react';
import styled from 'styled-components';
import MoviesList from './MoviesList';

const MediaLists = ({ token, setId }) => {
  return (
    <Wrapper>
      <MoviesList
        list={2}
        title={'Action'}
        token={token}
        setMediaId={setId}
      /> 
      <MoviesList
        list={3}
        title={'Crime'}
        token={token}
        setMediaId={setId}
      />
      <MoviesList
        list={4}
        title={'Classics'}
        token={token}
        setMediaId={setId}
      />
      <MoviesList
        list={5}
        title={'Sports'}
        token={token}
        setMediaId={setId}
      />
      <MoviesList
        list={6}
        title={'Thriller'}
        token={token}
        setMediaId={setId}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default MediaLists;
