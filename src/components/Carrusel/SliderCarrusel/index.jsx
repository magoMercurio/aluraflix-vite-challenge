// eslint-disable-next-line no-unused-vars
import React from 'react';
import VideoCard from '../VideoCard';
import styled from 'styled-components';


/* import Slider from "react-slick"; */





const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  
`

const SliderCarrusel = (props) => {


  /* const {  } = props.datos */
  const { colorCategoria, videos } = props



  return (
    <div className="slider-carrusel">
      
      <CardContainer>
        {
          videos.map((video, index) => (
            <VideoCard
              key={ index }
              datos={ video }
              colorCategoria={ colorCategoria }
              />
          ))
        }
      </CardContainer>
    </div>
  )
}

export default SliderCarrusel
