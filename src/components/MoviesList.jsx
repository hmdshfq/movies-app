import React from 'react';
import styled from 'styled-components'

const MoviesList = ({ media }) => {
    
    const movieTitles = () => {
        const arr = []
        for (let i = 0; i < media.length; i++){
            arr.push(<li key={ media[i].Id }>{ media[i].Title }</li>)
        }
        return arr
    }
    const movieImages = () => {
        const arr = []
        for (let i = 0; i < media.length; i++){
            arr.push(<li key={ media[i].Id }><Image src={ media[i].Images[0].Url } alt="" /></li>)
        }
        return arr
    }
    return (
        <>
            <ul>{movieTitles()}</ul>
            <ul>{movieImages()}</ul>
        </>

    );
};

const Image = styled.img`
    aspect-ratio: 16/9;
    width: 300px;
    height: 169px;
    object-fit: cover;
`

export default MoviesList;
