// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components'
import heroimg from '../../img/backgroundHero.webp'
import ReactPlayer from 'react-player/youtube'
import { Abtn } from '../Ui'

const backgroundimg = {
  backgroundImage: `url(${heroimg})`
} 

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 688px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 28px;
`

const ContainerVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const BtnCategoria = styled(Abtn)`
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  margin-bottom: 30px;
`

const TitleMedium = styled.h2`
font-family: var(--font-family);
color: var(--font-color);
  font-size: var(--font-size-title-medium);
  font-weight: var(--font-weight-400);
  font-style: normal;
  margin-bottom: 9px;
`
const BodyMedium = styled.p`
  max-width: 661px;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: var(font-weight-300);
  font-size: var(--font-size-body-medium);
  line-height:var(--line-height-body-medium);
  color: var(--font-color);
  word-wrap: break-word;
`

const Hero = (props) => {

  const { videos, categorias } = props
  const { colorCategoria } = categorias


  const ultimoVideo = videos.length > 0 ? videos[videos.length - 1] : null

  const bgc = {
    background: colorCategoria,
    border: colorCategoria
  }

  return (
    <HeroSection className="hero" id='frontend' style={backgroundimg} >
      <HeroContainer>
        <ContainerDescription>
          <BtnCategoria style={ bgc } >
            {ultimoVideo.categoria}
          </BtnCategoria>
          <TitleMedium>{ultimoVideo.titulo}</TitleMedium>
          <BodyMedium>
          {ultimoVideo.descripcion}
          </BodyMedium>
        </ContainerDescription>
        <ContainerVideo>
          {
            ultimoVideo && (
              <ReactPlayer
                className="video-header"
                url={ultimoVideo.link}
                width="60%"
                controls
              />
            )
          }
        </ContainerVideo>
      </HeroContainer>
    </HeroSection>
    
  )
}

export default Hero