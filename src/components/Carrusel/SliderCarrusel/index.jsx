// eslint-disable-next-line no-unused-vars
import React from 'react';
import VideoCard from '../VideoCard';
import styled from 'styled-components';
import { Abtn, Parrafo } from '../../Ui'

/* import Slider from "react-slick"; */


const TitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 114px;
gap: 11px;
`

const TitleCategoria = styled(Abtn)`

`
const DescriptionCategoria = styled(Parrafo)`

`

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  
`

const SliderCarrusel = (props) => {

 /*  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
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
}; */

  const { categoria, descripcion } = props.datos
  const { colorCategoria, videos } = props

  const bgc = {
    background: colorCategoria,
    border: colorCategoria
  }

  return (
    <div className="slider-carrusel">
      {
        videos.length > 0 ?
        <TitleContainer>
          <TitleCategoria style={ bgc }>{ categoria }</TitleCategoria>
          <DescriptionCategoria>{ descripcion }</DescriptionCategoria>
        </TitleContainer> : null
      }
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
