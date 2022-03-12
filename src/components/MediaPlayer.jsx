import React, {useState, useEffect} from 'react';
import Player from 'react-player';
import styled from 'styled-components';
import api from '../api/swagger';

const MediaPlayer = ({ token, mediaId }) => {

  const [url, setUrl] = useState('');
  /* Authorization token */
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  /** Object for media item */
  const mediaPlayParams = {
    MediaId: mediaId,
    StreamType: 'TRIAL',
  };

  useEffect(() => {
    /** Fetch media item for content url */
    const getMediaInfo = async () => {
      let response = await api.post(
        '/Media/GetMediaPlayInfo',
        mediaPlayParams,
        config
      );
      setUrl(response.data.ContentUrl);
    };
    getMediaInfo();
  }, [mediaId]);


  if (!url) return (
    <Wrapper>
      <BlackBackground>Content Not Found!</BlackBackground>
    </Wrapper>
  );
  return (
    <Wrapper>
      <Player controls url={url} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  background: #000000;
`;

const BlackBackground = styled.div`
  height: 360px;
  display: flex;
  align-items: center;
  font-size: 2rem;
`

export default MediaPlayer;
