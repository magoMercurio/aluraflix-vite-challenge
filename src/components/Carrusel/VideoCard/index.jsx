// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';

const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const VideoCard = (props) => { 

  const { link } = props.datos;
  const { colorCategoria } = props;
  const bc = {
    border: `4px solid ${colorCategoria}`
  }

  return (
    <VideoCardContainer className="video-card" style={ bc }> 
      <ReactPlayer
        url={link}
        width="100%"
        height="100%"
        controls={false}
        className="player"
      />
    </VideoCardContainer>
  );
}

export default VideoCard