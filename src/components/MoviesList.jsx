import React, { useEffect, useState } from 'react';
import api from '../api/swagger';
import styled from 'styled-components';
import SplashScreen from './SplashScreen';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const MoviesList = ({ list, title, token, setMediaId }) => {
  const [mediaList, setMediaList] = useState(null);
  const placeholder =
    'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80';

  /* Authorization token */
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  /** Object for media list */
  const mediaListParams = {
    MediaListId: list,
    IncludeCategories: false,
    IncludeImages: true,
    IncludeMedia: false,
    PageNumber: 1,
    PageSize: 15,
  };

  /* Fetch the list of media */
  useEffect(() => {
    const getMediaListInfo = async () => {
      let response = await api.post(
        '/Media/GetMediaList',
        mediaListParams,
        config
      );
      setMediaList(response.data.Entities);
    };
    getMediaListInfo();
  }, []);

  /** Scroll to top after clicking */
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
      });
    }


  /** React Slick Slider Settings */
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    rows: 1,
    swipeToSlide: true,
    useCSS: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (!mediaList) return <SplashScreen />;
  return (
    <div>
      <ListTitle>{title}</ListTitle>
      <Slider {...settings}>
        {mediaList.map(item => (
          /* 
            Clicking video will set its Id in the mediaPlayParams
            and this object will be passed to server for fetching 
            video details
          */
          <MediaCard key={item.Id} onClick={() => { setMediaId(item.Id); scrollTop() }}>
            <Image
              src={item.Images.filter(i => i.ImageTypeCode === "FRAME").length ? item.Images.filter(i => i.ImageTypeCode === "FRAME")[0].Url : placeholder
              }
              alt=''
            />
            <MediaTitle>{item.Title}</MediaTitle>
          </MediaCard>
        ))}
      </Slider>
    </div>
  );
};
``
const ListTitle = styled.h2`
  margin-top: 30px;
  text-align: center;
`;

const MediaCard = styled.div`
  position: relative;
  border-radius: var(--border-radius);
  margin: 10px 0;
  cursor: pointer;
`;

const Image = styled.img`
  aspect-ratio: 16/9;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
`;

const MediaTitle = styled.p`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  background: linear-gradient(
    to bottom,
    hsl(0 0% 0% / 0) 0%,
    hsl(0 0% 0% / 0.1) 10%,
    hsl(0 0% 0% / 1) 100%
  );
  font-size: 1.125rem;
  padding: 10px;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
`;

export default MoviesList;
