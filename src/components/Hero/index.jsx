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

const BtnFrontEnd = styled.a`
  box-sizing: border-box;
  width: 180px;
  height: 54px;
  background-color: var(--color-black-dark);
  color: #ffffff;
  border: 1px solid var(--color-gray-light);
  border-radius: 4px;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
`

const TitleMedium = styled.h2`
font-family: var(--font-family);
color: var(--font-color);
  font-size: var(--font-size-title-medium);
  font-weight: var(--font-weight-400);
  font-style: normal;
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
      <BtnFrontEnd href="#frontend">Front-End</BtnFrontEnd>
      <TitleMedium>Challenge React</TitleMedium>
      <BodyMedium>
      Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
      </BodyMedium>
    </HeroSection>
    
  )
}

export default Hero