import React, {useState, useEffect} from 'react';
import Player from 'react-player';
import styled from 'styled-components';
import api from '../api/swagger';

const MediaPlayer = ({ token, mediaId }) => {

  const [url, setUrl] = useState('');
  const [content, setContent] = useState(false);
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
      try {
        let response = await api.post(
          '/Media/GetMediaPlayInfo',
          mediaPlayParams,
          config
        );
        setContent(true);
        setUrl(response.data.ContentUrl);
      } catch (error) {
        console.log(error)
      }
    };
    getMediaInfo();
  }, [mediaId]);

  if (!url && !content) return (
    <Wrapper bg={'var(--gray-100)'}>
      <Welcome>Welcome to Swagger Flix!</Welcome>
    </Wrapper>
  )

  if (!url && content) return (
    <Wrapper bg={'#000000'}>
      <Error>Content Not Found!</Error>
    </Wrapper>
  );
  return (
    <Wrapper bg={'#000000'}>
      <Player controls url={url} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  background: ${props => props.bg};
  height: 360px;
display: flex;
align-items: center;
`;

const Welcome = styled.p`
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary-500);
`

const Error = styled.p`
  font-size: 2rem;
`

export default MediaPlayer;
