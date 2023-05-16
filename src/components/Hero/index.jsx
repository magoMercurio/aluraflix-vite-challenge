// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components'

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("../../../public/img/backgroundHero.png");
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
`

const BtnFrontEnd = styled.a`
  box-sizing: border-box;
  width: 296px;
  height: 92px;
  background-color: var(--color-frontend);
  color: var(--color-gray-light);
  border: 4px solid #6BD1FF;
  border-radius: 4px;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: var(--font-weight-400);
  font-size: var(--font-size-title-big);
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 40px;
  
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

const Hero = () => {
  
  return (
    <HeroSection className="hero" id='frontend'>
      <HeroContainer>
        <ContainerDescription>
          <BtnFrontEnd href="#frontend">Front-End</BtnFrontEnd>
          <TitleMedium>Challenge React</TitleMedium>
          <BodyMedium>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
          </BodyMedium>
        </ContainerDescription>
        <ContainerVideo>
          <h1>aqui va un video</h1>
        </ContainerVideo>
      </HeroContainer>
    </HeroSection>
    
  )
}

export default Hero